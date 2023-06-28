const GlRecordExpenseService = require('../../services/gl_record_expense_service');
class GlRecordExpenseController {
    async createRecordExpense(req, res) {
        try{
            const { 
                RE_Code, 
                RE_Post_Date,
                RE_Due_Date, 
                RE_Total,
                id_numbering,
                id_journal,
                id_accounting_period } = req.body;

            const newRecordExpense = await GlRecordExpenseService.createRecordExpense({
                RE_Code: RE_Code,
                RE_Post_Date: RE_Post_Date,
                RE_Due_Date: RE_Due_Date,
                RE_Total: RE_Total,
                id_journal: id_journal,
                id_accounting_period: id_accounting_period,
                id_numbering: id_numbering
            });
            return res.status(201).json({
                status: 'success',
                message: 'Journal created successfully',
                data: newRecordExpense,
            });
        }catch(err){
            res.status(500).json({
                status: 'error',
                message: 'New RecordExpense created failed'+err,
            });
        }
    }

    async getLastRecordExpense(req,res){
        try {
            const RecordExpense = await GlRecordExpenseService.getLastRecordExpense();
            if (!RecordExpense) {
                return res.status(404).json({
                    status: 'error',
                    message: 'RecordExpense not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'RecordExpense retrieved successfully',
                data: RecordExpense,
            });
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: 'RecordExpense retrieved failed',
            });
        }
    }

    async getAllRecordExpenseSort(req, res) {
        try {
            const allRecordExpense = await GlRecordExpenseService.getAllRecordExpenseSort();
            if (allRecordExpense.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of RecordExpense not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of RecordExpense retrieved successfully',
                data: allRecordExpense,
            });
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: 'List of RecordExpense retrieved failed',
            });
        }
    }
    async getAllRecordExpense(req, res) {
        try {
            const allRecordExpense = await GlRecordExpenseService.getAllRecordExpense();
            if (allRecordExpense.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of RecordExpense not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of RecordExpense retrieved successfully',
                data: allRecordExpense,
            });
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: 'List of RecordExpense retrieved failed',
            });
        }
    }
    async getAllRecordExpenseDetailByRecordExpense(req, res) {
        try {
            const recordexpensecode = req.params.recordexpensecode
            const allRecordExpense = await GlRecordExpenseService.getAllRecordExpenseDetailByRecordExpense(recordexpensecode);
            if (allRecordExpense.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of RecordExpense Detail not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of RecordExpense Detail retrieved successfully',
                data: allRecordExpense,
            });
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: 'List of RecordExpense Detail retrieved failed',
            });
        }
    }
}

module.exports = new GlRecordExpenseController()