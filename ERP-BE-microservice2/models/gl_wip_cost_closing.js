'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlWipCostClosing extends Model {
        static associate(models) {
            GlWipCostClosing.belongsTo(models.GlAccountType, {
                foreignKey: 'id_account_type',
            });
            GlWipCostClosing.belongsTo(models.GlAccountingPeriod, {
                foreignKey: 'id_accounting_period',
            });
            GlWipCostClosing.belongsTo(models.MfProductionOrder, {
                foreignKey: 'po_id',
            });
            GlWipCostClosing.belongsTo(models.MfWorkcentre, {
                foreignKey: 'wc_id',
            });
        }
    }
    GlWipCostClosing.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            id_account_type: DataTypes.INTEGER,
            id_accounting_period: DataTypes.INTEGER,
            po_id: DataTypes.STRING,
            wc_id: DataTypes.STRING,
            WCostClosing_DirectLabour: DataTypes.FLOAT,
            WCostClosing_Overhead: DataTypes.FLOAT,
            WCostClosing_PrevCost: DataTypes.FLOAT,
            WCostClosing_RawMaterial: DataTypes.FLOAT,
            WCostClosing_EndProduct: DataTypes.FLOAT,
        },
        {
            sequelize,
            modelName: 'GlWipCostClosing',
            tableName: 'gl_wip_cost_closings',
        },
    );
    return GlWipCostClosing;
};
