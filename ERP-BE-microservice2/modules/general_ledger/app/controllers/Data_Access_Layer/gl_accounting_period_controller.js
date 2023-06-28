const GlAccountingPeriodService = require('../../services/gl_accounting_period_service');
class GlAccountingPeriodController {
    async getAllAccountingPeriod(req, res) {
        try {
            const allAccountingperiod =
                await GlAccountingPeriodService.getAllAccountingPeriod();
            if (allAccountingperiod.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of Accounting Period not found',
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of Accounting Period success retrieved',
                data: allAccountingperiod,
            });
        } catch (err) {
            return res.status(404).json({
                status: 'error',
                message: 'List of Accounting Period retrieved failed',
            });
        }
    }
}
module.exports = new GlAccountingPeriodController();
