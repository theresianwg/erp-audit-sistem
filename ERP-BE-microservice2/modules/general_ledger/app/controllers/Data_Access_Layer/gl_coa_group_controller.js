const GlCoaGroupService = require('../../services/gl_coa_group_service');
const GlAccountTypeService = require('../../services/gl_account_type_service');
class GlCoaGroupController {
    async getAllCoaGroup(req, res) {
        try {
            const allCoaGroup = await GlCoaGroupService.getAllCoaGroup();
            if (allCoaGroup.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of COA Group not found',
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of COA Group retrieved successfully',
                data: allCoaGroup,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'List of COA Group retrieved failed',
            });
        }
    }
    async getAllCoaGroupSort(req, res) {
        try {
            const allCoaGroup = await GlCoaGroupService.getAllCoaGroupSort();
            if (allCoaGroup.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of COA Group not found',
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of COA Group retrieved successfully',
                data: allCoaGroup,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'List of COA Group retrieved failed',
            });
        }
    }
    async getCoaGroupById(req, res) {
        const CoaGroupid = req.params.coagroupid;
        try {
            const CoaGroup = await GlCoaGroupService.getCoaGroupById(
                CoaGroupid,
            );
            if (!CoaGroup) {
                return res.status(404).json({ error: 'COA Group not found' });
            }
            return res.status(200).json({
                status: 'success',
                message: 'COA Group is found',
                data: CoaGroup,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message,
            });
        }
    }
    async createCoaGroup(req, res) {
        const { name, parent, number, accountCode } = req.body;
        const checkNumber = await GlCoaGroupService.getCoaGroupByCode(number);
        const AccountCode = await GlAccountTypeService.getAccountTypeByCode(
            accountCode,
        );
        if (checkNumber) {
            return res.status(400).json({
                status: 'error',
                message: 'COA Group with that number already exist',
            });
        } else if (!AccountCode) {
            return res.status(400).json({
                status: 'error',
                message:
                    "COA Group with that Account Type Code don't exist yet",
            });
        }
        const newCoaGroup = await GlCoaGroupService.createCoaGroup({
            id_account_type: AccountCode.id,
            CG_Name: name,
            CG_Code: number,
        });
        return res.status(201).json({
            status: 'success',
            message: 'COA Group created successfully',
            data: newCoaGroup,
        });
    }
    async updateCoaGroup(req, res) {
        try {
            const coaGroupId = req.params.coagroupid;
            if (!GlCoaGroupService.getCoaGroupById(coaGroupId)) {
                return res.status(404).json({
                    error: 'COA Group not found',
                });
            }
            const { name, parent, number, accountCode } = req.body;
            const checkNumber = await GlCoaGroupService.getCoaGroupByCode(
                number,
            );
            const AccountCode = await GlAccountTypeService.getAccountTypeByCode(
                accountCode,
            );
            if (!checkNumber) {
                return res.status(400).json({
                    status: 'error',
                    message: "COA Group with that number don't exist",
                });
            } else if (!AccountCode) {
                return res.status(400).json({
                    status: 'error',
                    message:
                        "COA Group with that Account Type Code don't exist",
                });
            }
            const updateCoaGroup = await GlCoaGroupService.updateCoaGroup(
                coaGroupId,
                {
                    accountTypeId: AccountCode.id,
                    CG_Name: name,
                    CG_Parent: parent,
                    CG_Code: number,
                },
            );
            return res.status(200).json({
                status: 'success',
                message: 'COA Group updated successfully',
                data: updateCoaGroup,
            });
        } catch (err) {
            return res.status(500).json({
                message: err.message,
            });
        }
    }
    async deleteCoaGroup(req, res) {
        try {
            const coaGroupId = req.params.coagroupid;
            if (!GlCoaGroupService.getCoaGroupById(coaGroupId)) {
                return res.status(404).json({
                    error: 'COA Group not found',
                });
            }
            const deleteCoaGroup = await GlCoaGroupService.deleteCoaGroup(
                coaGroupId,
            );
            return res.status(200).json({
                status: 'success',
                message: 'COA Group deleted successfully',
                deleted: deleteCoaGroup,
            });
        } catch (err) {
            return res.status(500).json({
                message: err.message,
            });
        }
    }
}
module.exports = new GlCoaGroupController();
