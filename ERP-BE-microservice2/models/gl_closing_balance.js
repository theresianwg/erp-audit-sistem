'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlClosingBalance extends Model {
        static associate(models) {
            GlClosingBalance.belongsTo(models.GlAccountingPeriod, {
                foreignKey: 'id_accounting_period',
            }),
            GlClosingBalance.belongsTo(models.GlCoa, {
                foreignKey: 'id_coa',
            });
        }
    }
    GlClosingBalance.init(
        {
            id_accounting_period: DataTypes.INTEGER,
            id_coa: DataTypes.INTEGER,
            CB_Balance: DataTypes.INTEGER,
            CB_Date: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'GlClosingBalance',
            tableName: 'gl_closing_balances',
        },
    );
    return GlClosingBalance;
};
