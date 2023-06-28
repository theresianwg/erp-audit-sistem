'use strict';

const SalarySlipService = require('../services/SalarySlipService');
const SalaryIncomeService = require('../services/SalaryIncomeService');

class SalaryIncomeController {
    async getAllSalaryIncomes(req, res, next) {
        try {
            const salary_income = await SalaryIncomeService.getAllSalaryIncomes();
            res.json(salary_income);
        } catch (error) {
            next(error);
        }
    }

    async getSalaryIncomeById(req, res, next) {
        try {
            const salary_income = await SalaryIncomeService.getSalaryIncomeById(req.params.id);
            if (!salary_income) {
                return res.status(404).json({ message: 'SalaryIncome not found' });
            }
            res.json(salary_income);
        } catch (error) {
            next(error);
        }
    }

    async createSalaryIncome(req, res, next) {
        try {
            const { ss_id, income_id, nominal } = req.body;

            if( !ss_id ) {
                return res.status(404).json({ message: 'Salary Slip ID is missing' });
            }

            if( !income_id ) {
                return res.status(404).json({ message: 'Income ID is missing' });
            }

            if( !nominal ) {
                return res.status(404).json({ message: 'Nominal is missing' });
            }

            const salary_slip = await SalarySlipService.getSalarySlipById(ss_id);
            if (!salary_slip) {
                return res.status(404).json({ message: 'Salary slip not found' });
            }

            let exist = false;

            salary_slip.incomes.forEach(income => {
                if(income.id == income_id) exist = true;
                    
            });

            if (exist)
                return res.status(404).json({ message: 'Income in the specified salary slip is already exist.' });

            const salary_income = await SalaryIncomeService.createSalaryIncome(req.body);

            const updated_salary_slip =  await SalarySlipService.updateSalarySlip(ss_id, { 
                gajiBersih: salary_slip.gajiBersih + nominal 
            }); 

            if (updated_salary_slip[0] === 0) {
                return res.status(404).json({ message: 'Salary slip failed to be updated' });
            }


            res.status(201).json(salary_income);
        } catch (error) {
            next(error);
        }
    }

    async updateSalaryIncome(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await SalaryIncomeService.updateSalaryIncome(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'SalaryIncome not found' });
            }
            res.json({ message: 'SalaryIncome updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteSalaryIncome(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await SalaryIncomeService.deleteSalaryIncome(id);
            if (result === 0) {
                return res.status(404).json({ message: 'SalaryIncome not found' });
            }
            res.json({ message: 'SalaryIncome deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new SalaryIncomeController();
