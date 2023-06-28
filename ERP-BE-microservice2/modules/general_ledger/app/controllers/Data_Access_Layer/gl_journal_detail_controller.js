const GlJournalDetailService = require('../../services/gl_journal_detail_service');

class GlJournalDetailController {
    async getAllJournalDetail(req, res) {
        try {
            const allJournalDetail =
                await GlJournalDetailService.getAllJournalDetail();
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
    async createJouralDetail(req,res){
        try{
            const journalDetailDatas = req.body
            console.log(req.body)
            const newJournalDetail = await GlJournalDetailService.createJournalDetail(journalDetailDatas);
            return res.status(201).json({
                status: 'success',
                message: 'Journal Detail created successfully',
                data: newJournalDetail,
            });
        }catch (err) {
            res.status(500).json({
                status: 'error',
                message: 'Journal Detail created failed',
            });
        }
    }
    async getAllJournalDetailByAccountType(req, res) {
        try {
            const id_account_type = req.params.idaccounttype;
            const allJournalDetail = await GlJournalDetailService.getAllJournalDetailByAccountType(id_account_type);
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
}

module.exports = new GlJournalDetailController();
