'use strict';
const { Model } = require('sequelize');
const {
    generatePermissionId,
} = require('../modules/main/app/utils/idGenerator');

module.exports = (sequelize, DataTypes) => {
    class Permission extends Model {
        static associate(models) {
            Permission.belongsToMany(models.Role, {
                through: 'RolePermission',
                foreignKey: 'permissionId',
                as: 'roles',
            });
        }

        static async generateId() {
            const lastPermission = await this.findOne({
                order: [['createdAt', 'DESC']],
            });

            const lastNumber = lastPermission
                ? parseInt(lastPermission.id.slice(3))
                : 0;
            return generatePermissionId(lastNumber + 1);
        }
    }

    Permission.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            description: {
                type: DataTypes.TEXT,
            },
            module: {
                type: DataTypes.ENUM(
                    'inventory',
                    'cash_bank',
                    'account_payable',
                    'account_receivable',
                    'manufacturing',
                    'accounting',
                    'taxes',
                    // tambahkan modul-modul lain jika diperlukan
                ),
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: 'Permission',
            tableName: 'main_permissions',
        },
    );
    return Permission;
};
