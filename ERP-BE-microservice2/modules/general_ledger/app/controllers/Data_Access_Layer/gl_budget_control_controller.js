const GlBudgetControlService = require('../../services/gl_budget_control_service');

class GlBudgetControlController {
    async getAllBudgetControl(req, res) {
        try {
            const allBudgetControl =
                await GlBudgetControlService.getAllBudgetControl();
            if (allBudgetControl.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of Budget Control not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of Budget Control retrieved successfully',
                data: allBudgetControl,
            });
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: 'List of Budget Control retrieved failed',
            });
        }
    }
    async createBudgetControl(req, res){
        try{
            const {
                BC_Entity,
                BC_Amount,
                id_coa,
                id_accounting_period
            } = req.body
            const newBudgetControl = await GlBudgetControlService.createBudgetControl({
                BC_Entity:BC_Entity,
                BC_Amount:BC_Amount,
                id_coa:id_coa,
                id_accounting_period:id_accounting_period,
            });
            return res.status(201).json({
                status: 'success',
                message: 'Budget Control created successfully',
                data: newCoa,
            });
        }catch(err){
            res.status(500).json({
                status: 'error',
                message: 'Budget Control created failed',
            });
        }
    }
}

module.exports = new GlBudgetControlController();
