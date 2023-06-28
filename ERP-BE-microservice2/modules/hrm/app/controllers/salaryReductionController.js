'use strict';

const SalaryReductionService = require('../services/SalaryReductionService');
const SalarySlipService = require('../services/SalarySlipService');

class SalaryReductionController {
    async getAllSalaryReductions(req, res, next) {
        try {
            const reqHR = await SalaryReductionService.getAllSalaryReductions();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getSalaryReductionById(req, res, next) {
        try {
            const reqHR = await SalaryReductionService.getSalaryReductionById(req.params.id);
            if (!reqHR) {
                return res.status(404).json({ message: 'SalaryReduction not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createSalaryReduction(req, res, next) {
        try {
            const { ss_id, reduction_id, nominal } = req.body;

            if( !ss_id ) {
                return res.status(404).json({ message: 'Salary Slip ID is missing' });
            }

            if( !reduction_id ) {
                return res.status(404).json({ message: 'Reduction ID is missing' });
            }

            if( !nominal ) {
                return res.status(404).json({ message: 'Nominal is missing' });
            }

            const salary_slip = await SalarySlipService.getSalarySlipById(ss_id);
            if (!salary_slip) {
                return res.status(404).json({ message: 'Salary slip not found' });
            }

            let exist = false;

            salary_slip.reductions.forEach(reduction => {
                if(reduction.id == reduction_id) exist = true;
                    
            });

            if (exist)
                return res.status(404).json({ message: 'Reduction in the specified salary slip is already exist.' });

            const salary_reduction = await SalaryReductionService.createSalaryReduction(req.body);

            const updated_salary_slip =  await SalarySlipService.updateSalarySlip(ss_id, { 
                gajiBersih: salary_slip.gajiBersih - nominal 
            }); 

            if (updated_salary_slip[0] === 0) {
                return res.status(404).json({ message: 'Salary slip failed to be updated' });
            }

            res.status(201).json(salary_reduction);
        } catch (error) {
            next(error);
        }
    }

    async updateSalaryReduction(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await SalaryReductionService.updateSalaryReduction(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'SalaryReduction not found' });
            }
            res.json({ message: 'SalaryReduction updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteSalaryReduction(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await SalaryReductionService.deleteSalaryReduction(id);
            if (result === 0) {
                return res.status(404).json({ message: 'SalaryReduction not found' });
            }
            res.json({ message: 'SalaryReduction deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new SalaryReductionController();
