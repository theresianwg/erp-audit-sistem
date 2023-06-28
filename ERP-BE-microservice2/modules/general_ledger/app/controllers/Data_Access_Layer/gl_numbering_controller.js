const GlNumberingService = require('../../services/gl_numbering_service')
class GlNumberingController{
    async getAllNumbering(req, res) {
        try {
            const allNumberings = await GlNumberingService.getAllNumberings()
            if (allNumberings.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of Numbering not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of Numbering retrieved successfully',
                data: allNumberings,
            });
        }catch(err){
            res.status(500).json({
                status: 'error',
                message: 'List of Numbering  retrieved failed',
            });
        }
    }

    async createTransactionType(req,res){
        try{
            const { 
                Numbering_Name, 
                Numbering_Type, 
                id_transaction_type, 
                Numbering_Digit_Counter,
                Numbering_Component
            } = req.body;
            const newNumbering = await GlNumberingService.createNumbering({
                Numbering_Name :Numbering_Name, 
                Numbering_Type :Numbering_Type, 
                id_transaction_type: id_transaction_type, 
                Numbering_Digit_Counter: Numbering_Digit_Counter,
                Numbering_Component: Numbering_Component
            });
            return res.status(201).json({
                status: 'success',
                message: 'Numbering created successfully',
                data: newNumbering,
            });
        }catch(err){
            res.status(500).json({
                status: 'error',
                message: 'New Numbering created failed',
            });
        }
    }
    async getNumberingById(req, res) {
        try {
            const id_numbering= req.params.idnumbering
            const NumberingWithId = await GlNumberingService.getNumberingById(id_numbering);
            if (NumberingWithId.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Numbering with that id not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'Numbering with that id retrieved successfully',
                data: NumberingWithId,
            });
        }catch(err){
            res.status(500).json({
                status: 'error',
                message: 'Numbering with that id  retrieved failed',
            });
        }
    }
}
module.exports = new GlNumberingController();