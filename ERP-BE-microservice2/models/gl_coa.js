'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlCoa extends Model {
        static associate(models) {
            // define association here
            GlCoa.belongsTo(models.GlAccountType, {
                foreignKey: 'id_account_type',
            });
            GlCoa.belongsTo(models.GlCoaGroup, {
                foreignKey: 'id_coa_group',
            });
            GlCoa.belongsTo(models.MfWorkcentre, {
                foreignKey: 'wc_id',
            });
            GlCoa.belongsTo(models.GlTransactionType, {
                foreignKey: 'id_transaction_type',
            });
            GlCoa.hasMany(models.GlJournalDetail, {
                foreignKey: 'id_coa',
            });
            GlCoa.hasMany(models.GlBudgetControl, {
                foreignKey: 'id_coa',
            });
            GlCoa.hasMany(models.GlClosingBalance, {
                foreignKey: 'id_coa',
            });
            GlCoa.hasMany(models.InItem, {
                foreignKey: 'id_coa',
            });
            GlCoa.hasMany(models.GlRecordExpenseDetail, {
                foreignKey: 'id_coa',
            });
            GlCoa.hasMany(models.TaTax, {
                foreignKey: 'id_coa',
                as: 'tatax',
            });
        }
    }
    GlCoa.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            currency_id: DataTypes.STRING,
            id_transaction_type: DataTypes.INTEGER,
            id_account_type: DataTypes.INTEGER,
            id_coa_group: DataTypes.INTEGER,
            wc_id: DataTypes.STRING,
            Coa_Name: DataTypes.STRING,
            Coa_Number: DataTypes.INTEGER,
            Coa_Entity: DataTypes.STRING,
            Coa_Opening_Balance: DataTypes.FLOAT,
            Coa_Normal_Balance: DataTypes.STRING,
            Coa_Description: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'GlCoa',
            tableName: 'gl_coas',
        },
    );
    return GlCoa;
};
