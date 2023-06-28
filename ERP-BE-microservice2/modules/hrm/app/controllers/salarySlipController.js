'use strict';

const SalarySlipService = require('../services/SalarySlipService');
const SalaryIncomeService = require('../services/SalaryIncomeService');
const EmployeeService = require('../../../main/app/services/EmployeeService');
const RoleService = require('../../../main/app/services/RoleService');
const CompanyService = require('../../../main/app/services/CompanyService');
const PositionService = require('../services/PositionService');
const generateSalarySlipPDF = require('../utils/salarySlipPDFGenerator');
const generateSalarySlipCSV = require('../utils/salarySlipCSVGenerator');
const sumIncomeBasedOnType = require('../utils/sumIncomeBasedOnType');
const sumReductionBasedOnType = require('../utils/sumReductionBasedOnType');

class SalarySlipController {
    async getAllSalarySlips(req, res, next) {
        try {
            const salary_slip = await SalarySlipService.getAllSalarySlips();
            res.json(salary_slip);
        } catch (error) {
            next(error);
        }
    }

    async getSalarySlipById(req, res, next) {
        try {
            const salary_slip = await SalarySlipService.getSalarySlipById(req.params.id);
            if (!salary_slip) {
                return res.status(404).json({ message: 'SalarySlip not found' });
            }
            res.json(salary_slip);
        } catch (error) {
            next(error);
        }
    }

    async getSalarySlipByYear(req, res, next) {
        try {
            const { employeeId, year } = req.body;

            if (!employeeId) {
                return res.status(404).json({ message: 'Employee ID is missing' });
            }

            if (!year) {
                return res.status(404).json({ message: 'Year is missing' });
            }

            const salary_slip = await SalarySlipService.getSalarySlipByYear(req.body);
            if (!salary_slip) {
                return res.status(404).json({ message: 'SalarySlip not found' });
            }
            res.json(salary_slip);
        } catch (error) {
            next(error);
        }
    }

    async createSalarySlip(req, res, next) {
        try {
            const { employeeId, startDate, lastDate } = req.body;

            if (!employeeId) {
                return res.status(404).json({ message: 'Employee ID is missing' });
            }
    
            if( !startDate ) {
                return res.status(404).json({ message: 'Start date is missing' });
            }

            if( !lastDate ) {
                return res.status(404).json({ message: 'Last date is missing' });
            }

            const salary_slip = await SalarySlipService.createSalarySlip(req.body);
            const ss_id = salary_slip.id;

            const nominal = await SalaryIncomeService.getBasicSalary(req.body);
            if (!nominal) {
                return res.status(404).json({ message: 'Can not get basic salary' });
            }

            const salary_income = await SalaryIncomeService.createSalaryIncome({ 
                ss_id, 
                income_id: 1, 
                nominal 
            });

            const gajiBersih = nominal + salary_slip.gajiBersih;

            const updated_salary_slip =  await SalarySlipService.updateSalarySlip(ss_id, { gajiBersih });
            if (updated_salary_slip[0] === 0) {
                return res.status(404).json({ message: 'Salary slip failed to be updated' });
            }

            res.status(201).json({ message: 'Salary slip has been created' });
        } catch (error) {
            next(error);
        }
    }

    async updateSalarySlip(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await SalarySlipService.updateSalarySlip(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'SalarySlip not found' });
            }
            res.json({ message: 'SalarySlip updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteSalarySlip(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await SalarySlipService.deleteSalarySlip(id);
            if (result === 0) {
                return res.status(404).json({ message: 'SalarySlip not found' });
            }
            res.json({ message: 'SalarySlip deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

    async refreshAllSalarySlip(req, res, next) {
        try {
            const salary_slips = await SalarySlipService.getAllSalarySlips();

            for (const salary_slip of salary_slips) {
                let gajiBersih = 0;

                if (salary_slip.incomes) {
                    salary_slip.incomes.forEach(income => {
                        gajiBersih += income.SalaryIncome.nominal;
                    });
                }

                if (salary_slip.reduction) {
                    salary_slip.reductions.forEach(reduction => {
                        gajiBersih -= reduction.SalaryReduction.nominal;
                    });
                }
                
                const result = await SalarySlipService.updateSalarySlip(salary_slip.id, { gajiBersih });

                if (result[0] === 0) {
                    return res.status(404).json({ message: 'A salary slip is failed to be updated' });
                }
            };

            res.json({ message: 'All salary slip has been refreshed.' });
        } catch (error) {
            next(error);
        }
    }

    async generateSalarySlipCSV(req, res) {
        try {
            const salary_slips = await SalarySlipService.getAllSalarySlips();

            if (!salary_slips || salary_slips.length === 0) {
                res.status(404).json({ message: 'No Bukpot found' });
                return;
            }

            const formatted_salary_slips = [];

            salary_slips.forEach(async (salary_slip) => {
                const income_sum = sumIncomeBasedOnType(salary_slips);
                const reduction_sum = sumReductionBasedOnType(salary_slips)
                formatted_salary_slips.push({...income_sum, ...reduction_sum});
            });

            await generateSalarySlipCSV(formatted_salary_slips, res);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async generateSalarySlipPDF(req, res) {
        try {
            const salary_slip = await SalarySlipService.getSalarySlipById(req.params.id);
            if (!salary_slip) {
                return res.status(404).json({ message: 'Salary slip not found' });
            }

            const employee = await EmployeeService.getEmployeeById(salary_slip.employeeId);
            const role = await RoleService.getRoleById(employee.roleId);
            const company = await CompanyService.getCompanyById(role.companyId);
            const position = await PositionService.getPositionById(employee.positionId);
            
            const pdfBuffer = await generateSalarySlipPDF(salary_slip, employee, company, position);

            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename="salary_slip.pdf"`);
            
            res.end(pdfBuffer);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = new SalarySlipController();
