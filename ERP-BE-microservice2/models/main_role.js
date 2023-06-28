'use strict';
const { Model } = require('sequelize');
const { generateRoleId } = require('../modules/main/app/utils/idGenerator');

module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        static associate(models) {
            Role.belongsTo(models.Company, {
                foreignKey: 'companyId',
                as: 'company',
            });

            Role.hasMany(models.Employee, {
                foreignKey: 'roleId',
                as: 'employees',
            });

            Role.belongsToMany(models.Permission, {
                through: 'RolePermission',
                foreignKey: 'roleId',
                as: 'permissions',
            });
        }

        static async generateId() {
            const lastRole = await this.findOne({
                order: [['createdAt', 'DESC']],
            });

            const lastNumber = lastRole ? parseInt(lastRole.id.slice(3)) : 0;
            return generateRoleId(lastNumber + 1);
        }
    }

    Role.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING,
            },
            roleClass: {
                allowNull: false,
                type: DataTypes.ENUM(
                    'Super Admin',
                    'Company Employee',
                    'Company Guest',
                ),
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
            },
            companyId: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'main_companies',
                    key: 'id',
                },
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
            modelName: 'Role',
            tableName: 'main_roles',
        },
    );

    return Role;
};
