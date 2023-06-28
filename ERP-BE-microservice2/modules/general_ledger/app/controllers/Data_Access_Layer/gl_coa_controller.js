const GlCoaService = require('../../services/gl_coa_service');
const GlCoaGroupService = require('../../services/gl_coa_group_service');
const GlAccountTypeService = require('../../services/gl_account_type_service');
const { generateCoaCode } = require('../../utils/gl_generate_id_utils');
class GlCoaController {
    async getAllCoa(req, res) {
        try {
            const allCoa = await GlCoaService.getAllCoa();
            if (allCoa.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of COA not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of COA retrieved successfully',
                data: allCoa,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'List of COA retrieved failed',
            });
        }
    }
    async getAllCoaSort(req, res) {
        try {
            const allCoa = await GlCoaService.getAllCoaSort();
            if (allCoa.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of COA not found',
                    data: {},
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of COA retrieved successfully',
                data: allCoa,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'List of COA retrieved failed',
            });
        }
    }
    async getCoaById(req, res) {
        const Coaid = req.params.coaid;
        try {
            const Coa = await GlCoaService.getCoaById(Coaid);
            if (!Coa) {
                return res.status(404).json({ error: 'COA not found' });
            }
            return res.status(200).json({
                status: 'success',
                message: 'COA is found',
                data: Coa,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message,
            });
        }
    }
    async createCoa(req, res) {
        try {
            const data = req.body;
            if (!data.Coa_Number)
                data.Coa_Number = await generateCoaCode(data.id_coa_group);
            const GroupId = await GlCoaGroupService.getCoaGroupById(
                data.id_coa_group,
            );
            const checkNumber = await GlCoaService.getCoaByCode(
                data.Coa_Number,
            );
            const AccountId = await GlAccountTypeService.getAccountTypeById(
                data.id_account_type,
            );
            if (checkNumber) {
                return res.status(400).json({
                    status: 'error',
                    message: 'COA with that number already exist',
                });
            } else if (!GroupId) {
                return res.status(400).json({
                    status: 'error',
                    message: "COA with that COA Group Id don't exist yet",
                });
            } else if (!AccountId) {
                return res.status(400).json({
                    status: 'error',
                    message: "COA with that Account Type Id don't exist yet",
                });
            }
            console.log(data.Coa_Number)
            const newCoa = await GlCoaService.createCoa({
                id_coa_group: GroupId.id,
                id_account_type: AccountId.id,
                Coa_Name: data.Coa_Name,
                Coa_Normal_Balance: data.Coa_Normal_Balance,
                Coa_Number: data.Coa_Number,
            });
            return res.status(201).json({
                status: 'success',
                message: 'COA created successfully',
                data: newCoa,
            });
        } catch (err) {
            return res.status(500).json({
                message: err.message,
            });
        }
    }
    async updateCoa(req, res) {
        try {
            console.log(req.body)
            const coaId = req.params.coaid;
            if (!GlCoaService.getCoaById(coaId)) {
                return res.status(404).json({
                    error: 'COA not found',
                });
            }
            const {id_coa_group,id_account_type,Coa_Name,Coa_Number,Coa_Normal_Balance,Coa_Opening_Balance,Coa_Description} = req.body;
            // const checkNumber = await GlCoaService.getCoaByCode(number);
            // const GroupCode = await GlCoaGroupService.getCoaGroupByCode(
            //     data.groupCode,
            // );
            // const AccountCode = await GlAccountTypeService.getAccountTypeByCode(
            //     data.accountCode,
            // );
            // if (!checkNumber) {
            //     return res.status(400).json({
            //         status: 'error',
            //         message: "COA with that number don't exist",
            //     });
            // } else if (!GroupCode) {
            //     return res.status(400).json({
            //         status: 'error',
            //         message: "COA with that COA Group Code don't exist",
            //     });
            // } else if (!AccountCode) {
            //     return res.status(400).json({
            //         status: 'error',
            //         message: "COA with that Account Type Code don't exist",
            //     });
            // }
            const updateCoa = await GlCoaService.updateCoa(coaId, {
                id_coa_group: id_coa_group, 
                id_account_type: id_account_type, 
                Coa_Name: Coa_Name, 
                Coa_Number: Coa_Number, 
                Coa_Normal_Balance: Coa_Normal_Balance, 
                Coa_Opening_Balance: Coa_Opening_Balance,
                Coa_Description: Coa_Description,
            });
            return res.status(200).json({
                status: 'success',
                message: 'COA updated successfully',
                data: updateCoa,
            });
        } catch (err) {
            return res.status(500).json({
                message: err.message,
            });
        }
    }
    async deleteCoa(req, res) {
        try {
            const coaId = req.params.coaid;
            if (!GlCoaService.getCoaById(coaId)) {
                return res.status(404).json({
                    error: 'COA not found',
                });
            }
            const deleteCoa = await GlCoaService.deleteCoa(coaId);
            return res.status(200).json({
                status: 'success',
                message: 'COA deleted successfully',
                deleted: deleteCoa,
            });
        } catch (err) {
            return res.status(500).json({
                message: err.message,
            });
        }
    }
}
module.exports = new GlCoaController();
