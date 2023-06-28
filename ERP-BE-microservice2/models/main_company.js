'use strict';
const { Model } = require('sequelize');
const { generateCompanyId } = require('../modules/main/app/utils/idGenerator');

module.exports = (sequelize, DataTypes) => {
    class Company extends Model {
        static associate(models) {
            Company.hasMany(models.Role, {
                foreignKey: 'companyId',
                as: 'roles',
            });
            Company.hasOne(models.TaTaxCredentials, {
                foreignKey: 'companyId',
                as: 'tataxcredentials',
            });
        }

        static async generateId() {
            const lastCompany = await this.findOne({
                order: [['createdAt', 'DESC']],
            });

            const lastNumber = lastCompany
                ? parseInt(lastCompany.id.slice(3))
                : 0;
            return generateCompanyId(lastNumber + 1);
        }
    }

    Company.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: 'ID is required',
                    },
                },
            },
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING,
            imageURL: DataTypes.STRING,
            description: DataTypes.TEXT,
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            sequelize,
            modelName: 'Company',
            tableName: 'main_companies',
        },
    );

    return Company;
};
