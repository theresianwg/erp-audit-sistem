'use strict';

const BukpotService = require('../services/BukpotService');
const PTKPService = require('../services/ptkpService');
const PositionService = require('../services/positionService');
const EmployeeService = require('../../../main/app/services/EmployeeService');
const generateBukpotCSV = require('../utils/bukpotCSVGenerator');
const generateBukpotPDF = require('../utils/bukpotPDFGenerator');

class BukpotController {
    async getAllBukpots(req, res, next) {
        try {
            const reqHR = await BukpotService.getAllBukpots();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getBukpotById(req, res, next) {
        try {
            const bukpot = await BukpotService.getBukpotById(req.params.id);
            if (!bukpot) {
                return res.status(404).json({ message: 'Bukpot not found' });
            }

            console.log(bukpot.ptkp.amount);
            res.json(bukpot);
        } catch (error) {
            next(error);
        }
    }

    async getSalary(req, res, next) {
        const { employeeId, month, year } = req.body;

        if (!employeeId) {
            return res.status(404).json({ message: 'EmployeeID is missing' });
        }

        if( month && !year ) {
            return res.status(404).json({ message: 'Salary in a specified month should also include specified year' });
        }

        const salary = await BukpotService.getGaji(req.body);

        if (!salary) {
            return res.status(404).json({ message: 'Count salary error' });
        }
        res.json(salary);
    }

    async createBukpot(req, res, next) {
        try {
            const { employeeId, pemotongId, year } = req.body;

            if (!employeeId) {
                return res.status(404).json({ message: 'EmployeeID is missing' });
            }

            if (!pemotongId) {
                return res.status(404).json({ message: 'PemotongID is missing' });
            }

            if (!year) {
                return res.status(404).json({ message: 'Year is missing' });
            }

            const reqHR = await BukpotService.createBukpot(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updateBukpot(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await BukpotService.updateBukpot(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'Bukpot not found' });
            }
            res.json({ message: 'Bukpot updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteBukpot(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await BukpotService.deleteBukpot(id);
            if (result === 0) {
                return res.status(404).json({ message: 'Bukpot not found' });
            }
            res.json({ message: 'Bukpot deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

    async generateBukpotCSV(req, res) {
        try {
            const bukpots = await BukpotService.getAllBukpots();

            if (!bukpots || bukpots.length === 0) {
                res.status(404).json({ message: 'No Bukpot found' });
                return;
            }

            const formattedBukpots = [];
            bukpots.forEach(bukpot => {
                formattedBukpots.push(bukpot)
            });

            await generateBukpotCSV(formattedBukpots, res);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async generateBukpotPDF (req, res) {
        try {
            const bukpot = await BukpotService.getBukpotById(req.params.id);
            if (!bukpot) {
                return res.status(404).json({ message: 'Bukpot not found' });
            }

            const detailBukpot = await BukpotService.perhitunganBukpot(bukpot);

            const employee = await EmployeeService.getEmployeeById(bukpot.employeeId);
            const pemotong = await EmployeeService.getEmployeeById(bukpot.pemotongId);
            const ptkp = await PTKPService.getPTKPById(employee.ptkpId);
            const position = await PositionService.getPositionById(employee.positionId);
            
            const pdfBuffer = await generateBukpotPDF(detailBukpot, employee, pemotong, ptkp, position);

            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename="bukpot.pdf"`);
            
            res.end(pdfBuffer);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new BukpotController();
