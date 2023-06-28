'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlAccountingPeriod extends Model {
        static associate(models) {
            GlAccountingPeriod.hasMany(models.GlClosingBalance, {
                foreignKey: 'id_accounting_period',
            });
            GlAccountingPeriod.hasMany(models.GlCashFlow, {
                foreignKey: 'id_accounting_period',
            });
            GlAccountingPeriod.hasMany(models.GlBudgetControl, {
                foreignKey: 'id_accounting_period',
            });
            GlAccountingPeriod.hasMany(models.GlJournal, {
                foreignKey: 'id_accounting_period',
            });
            GlAccountingPeriod.hasMany(models.GlRecordExpense, {
                foreignKey: 'id_accounting_period',
            });
            GlAccountingPeriod.hasMany(models.GlWipqtyClosing, {
                foreignKey: 'id_accounting_period',
            });
            GlAccountingPeriod.hasMany(models.GlWipCost, {
                foreignKey: 'id_accounting_period',
            });
            GlAccountingPeriod.hasMany(models.GlWipCostClosing, {
                foreignKey: 'id_accounting_period',
            });
        }
    }
    GlAccountingPeriod.init(
        {
            AP_Name: DataTypes.STRING,
            AP_Start_Date: DataTypes.DATEONLY,
            AP_End_Date: DataTypes.DATEONLY,
            AP_Description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'GlAccountingPeriod',
            tableName: 'gl_accounting_periods',
        },
    );
    return GlAccountingPeriod;
};
