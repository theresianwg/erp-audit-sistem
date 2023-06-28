const GlRecordExpenseDetailService = require('../../services/gl_record_expense_detail_service')

class GlRecordExpenseDetailController{
    async createRecordExpenseDetail(rqe,res){
        try{
            const RecordExpenseDetailDatas = req.body
            console.log(req.body)
            const RecordExpenseDetail = await GlRecordExpenseDetailService.createRecordExpenseDetail(RecordExpenseDetailDatas);
            return res.status(201).json({
                status: 'success',
                message: 'RecordExpenseDetail created successfully',
                data: RecordExpenseDetail,
            });
        }catch(err){
            res.status(500).json({
                status: 'error',
                message: 'RecordExpenseDetail created failed' + err,
            });
        }
    }
    async getAllRecordExpenseDetail(req, res) {
        try {
            const allRecordExpenseDetail =
                await GlRecordExpenseDetailService.getAllRecordExpenseDetail();
            if (allRecordExpenseDetail.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'RecordExpenseDetail Detail not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'RecordExpenseDetail retrieved successfully',
                data: allRecordExpenseDetail,
            });
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: 'RecordExpenseDetailDetail retrieved failed',
            });
        }
    }
}
module.exports = new GlRecordExpenseDetailController()