const GlTransactionTypeService = require('../../services/gl_transaction_type_service')
class GlTransactionTypeController{
    async getAllTransactionType(req, res) {
        try {
            const allTranscationTypes = await GlTransactionTypeService.getAllTransactionTypes();
            if (allTranscationTypes.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of Transcation Type not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of Transcation Type retrieved successfully',
                data: allTranscationTypes,
            });
        }catch(err){
            res.status(500).json({
                status: 'error',
                message: 'List of Transcation Type retrieved failed',
            });
        }
    }

    async createTransactionType(req,res){
        try{
            const { 
                TT_Name, 
                TT_Code, 
                TT_Entity, 
                id_journal_source} = req.body;
            const newTransactionType = await GlTransactionTypeService.createTransactionType({
                TT_Name: TT_Name,
                TT_Code: TT_Code,
                TT_Entity: TT_Entity,
                id_journal_source: id_journal_source,
            });
            return res.status(201).json({
                status: 'success',
                message: 'Transaction Type created successfully',
                data: newTransactionType,
            });
        }catch(err){
            res.status(500).json({
                status: 'error',
                message: 'New transaction type created failed',
            });
        }
    }
    async getTransactionTypeById(req, res) {
        try {
            const id_transaction_type = req.params.idtransactiontype
            const allTranscationTypes = await GlTransactionTypeService.getTransactionTypeById(id_transaction_type);
            if (allTranscationTypes.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of Transcation Type not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'Transcation Type retrieved successfully',
                data: allTranscationTypes,
            });
        }catch(err){
            res.status(500).json({
                status: 'error',
                message: 'Transaction Type retrieved failed',
            });
        }
    }
}
module.exports = new GlTransactionTypeController();