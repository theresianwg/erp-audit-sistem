const GlAccountTypeService = require('../../services/gl_account_type_service');
class GlAccountTypeController {
    async getAllAccountType(req, res) {
        try {
            const allAccountType =
                await GlAccountTypeService.getAllAccountType();
            if (allAccountType.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of Account Type not found',
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of Account Type retrieved successfully',
                data: allAccountType,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'List of Account Type retrieved failed',
            });
        }
    }
    async getAllAccountTypeSort(req, res) {
        try {
            const allAccountType =
                await GlAccountTypeService.getAllAccountTypeSort();
            if (allAccountType.length == 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'List of Account Type not found',
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'List of Account Type retrieved successfully',
                data: allAccountType,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'List of Account Type retrieved failed',
            });
        }
    }
    async getAccountTypeById(req, res) {
        const accountTypeId = req.params.accounttypeid;
        try {
            const accountType = await GlAccountTypeService.getAccountTypeById(
                accountTypeId,
            );
            if (!accountType) {
                return res
                    .status(404)
                    .json({ error: 'Account Type not found' });
            }
            return res.status(200).json({
                status: 'success',
                message: 'Account Type is found',
                data: accountType,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message,
            });
        }
    }
    async createAccountType(req, res) {
        try {
            const { name, accountCode } = req.body;
            const AccountCode = await GlAccountTypeService.getAccountTypeByCode(
                accountCode,
            );
            if (AccountCode) {
                return res.status(400).json({
                    status: 'error',
                    message: 'COA with that Account Type Code already exist',
                });
            }
            const newAccountType = await GlAccountTypeService.createAccountType(
                {
                    AT_Name: name,
                    AT_Code: accountCode,
                },
            );
            return res.status(201).json({
                status: 'success',
                message: 'Account Type created successfully',
                data: newAccountType,
            });
        } catch (err) {
            return res.status(500).json({
                message: err.message,
            });
        }
    }
    async updateAccountType(req, res) {
        try {
            const accountTypeId = req.params.accounttypeid;
            if (!GlAccountTypeService.getAccountTypeById(accountTypeId)) {
                return res.status(404).json({
                    error: 'Account Type not found',
                });
            }
            const { name, accountCode } = req.body;
            const AccountCode = await GlAccountTypeService.getAccountTypeByCode(
                accountCode,
            );
            if (!AccountCode) {
                return res.status(400).json({
                    status: 'error',
                    message: "Account Type Code don't exist",
                });
            }
            const updateAccountType =
                await GlAccountTypeService.updateAccountType(accountTypeId, {
                    AT_Name: name,
                    AT_Code: accountCode,
                });
            return res.status(200).json({
                status: 'success',
                message: 'Account Type updated successfully',
                data: updateAccountType,
            });
        } catch (err) {
            return res.status(500).json({
                message: err.message,
            });
        }
    }
    async deleteAccountType(req, res) {
        try {
            const accountTypeId = req.params.accounttypeid;
            if (!GlAccountTypeService.getAccountTypeById(accountTypeId)) {
                return res.status(404).json({
                    error: 'Account Type not found',
                });
            }
            const deleteAccountType =
                await GlAccountTypeService.deleteAccountType(accountTypeId);
            return res.status(200).json({
                status: 'success',
                message: 'Account Type deleted successfully',
                deleted: deleteAccountType,
            });
        } catch (err) {
            return res.status(500).json({
                message: err.message,
            });
        }
    }
}

module.exports = new GlAccountTypeController();
