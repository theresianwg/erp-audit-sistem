const GlJournalService = require('../../services/gl_journal_service');
class GlJournalController {
    async getJournalByDate(req, res) {
        try{
            console.log(req.query)
            const {start_date, end_date} = req.query
            const allJournal = await GlJournalService.getJournalByDate(start_date, end_date);
            return res.status(200).json({
                status: 'success',
                message: 'List of Journal retrieved successfully',
                data: allJournal,
            });
        }catch(err){
            res.status(500).json({
                status: 'error',
                message: 'List of Journal retrieved failed',
            });
        }
    }
    async getAllJournal(req, res) {
        try {
            const allJournal = await GlJournalService.getAllJournal();
            if (allJournal.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of Journal not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of Journal retrieved successfully',
                data: allJournal,
            });
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: 'List of Journal retrieved failed',
            });
        }
    }
    async getAllJournalSort(req, res) {
        try {
            const allJournal = await GlJournalService.getAllJournalSort();
            if (allJournal.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of Journal not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of Journal retrieved successfully',
                data: allJournal,
            });
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: 'List of Journal retrieved failed',
            });
        }
    }
    async getAllJournalDetailByJournal(req, res) {
        try {
            const journalcode = req.params.journalcode;
            console.log(req);
            const allJournalDetail =
                await GlJournalService.getAllJournalDetailByJournal(
                    journalcode,
                );
            if (allJournalDetail.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of Journal Detail not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of Journal Detail retrieved successfully',
                data: allJournalDetail,
            });
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: 'List of Journal Detail retrieved failed',
            });
        }
    }
    async getLastJournal(req,res){
        try {
            const Journal = await GlJournalService.getLastJournal();
            if (!Journal) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Journal not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'Journal retrieved successfully',
                data: Journal,
            });
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: 'Journal retrieved failed', err,
            });
        }
    }
    async createJournal(req, res) {
        try {
            const {
                Journal_Code,
                Journal_Ref,
                Journal_Post_Date,
                Journal_Notes,
                Journal_Amount,
                id_numbering,
                id_accounting_period,
            } = req.body;
            console.log(req.body);
            // const checkCode = await GlJournalService.getJournalByCode(code);
            // const accountingPeriodId = await GlAccountingPeriodService.getAccountingPeriodById(
            //     id_accounting_period,
            // );
            // const transactionTypeId = await GlTransactionTypeService.getTransactionTypeById(id_transaction_type)
            // if (checkCode) {
            //     return res.status(400).json({
            //         status: 'error',
            //         message: 'Journal with that code already exist',
            //     });
            // } else if (!accountingPeriodId) {
            //     return res.status(400).json({
            //         status: 'error',
            //         message:
            //             "Accounting Period with that Id don't exist yet",
            //     });
            // } else if(!transactionTypeId){
            //     return res.status(400).json({
            //         status: 'error',
            //         message:
            //             "Transaction Type with that Id don't exist yet",
            //     });
            // }
            const newJournal = await GlJournalService.createJournal({
                Journal_Code: Journal_Code,
                Journal_Ref: Journal_Ref,
                Journal_Post_Date: Journal_Post_Date,
                Journal_Notes: Journal_Notes,
                Journal_Amount: Journal_Amount,
                id_accounting_period: id_accounting_period,
                id_numbering: id_numbering,
            });
            return res.status(201).json({
                status: 'success',
                message: 'Journal created successfully',
                data: newJournal,
            });
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: 'New journal created failed',
            });
        }
    }
}

module.exports = new GlJournalController();
