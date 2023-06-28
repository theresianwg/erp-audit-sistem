'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlCashFlow extends Model {
        static associate(models) {
            GlCashFlow.belongsTo(models.GlAccountingPeriod, {
                foreignKey: 'id_accounting_period',
            });
            GlCashFlow.belongsTo(models.MfWorkcentre, {
                foreignKey: 'wc_id',
            });
            GlCashFlow.hasMany(models.GlCashFlowDetail, {
                foreignKey: 'id_cash_flow',
            });
        }
    }
    GlCashFlow.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            id_accounting_period: DataTypes.INTEGER,
            wc_id: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'GlCashFlow',
            tableName: 'gl_cash_flows',
        },
    );
    return GlCashFlow;
};
