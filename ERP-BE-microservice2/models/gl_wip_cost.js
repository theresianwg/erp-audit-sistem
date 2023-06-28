'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlWipCost extends Model {
        static associate(models) {
            GlWipCost.belongsTo(models.GlAccountType, {
                foreignKey: 'id_account_type',
            }),
            GlWipCost.belongsTo(models.GlAccountingPeriod, {
                foreignKey: 'id_accounting_period',
            }),
            GlWipCost.belongsTo(models.MfProductionOrder, {
                foreignKey: 'po_id',
            }),
            GlWipCost.belongsTo(models.GlItemCategory, {
                foreignKey: 'id_item_category',
            }),
            GlWipCost.belongsTo(models.MfWorkcentre, {
                foreignKey: 'wc_id',
            });
        }
    }
    GlWipCost.init(
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
            id_item_category: DataTypes.INTEGER,
            wc_id: DataTypes.STRING,
            WCost_Amount: DataTypes.FLOAT,
        },
        {
            sequelize,
            modelName: 'GlWipCost',
            tableName: 'gl_wip_costs',
        },
    );
    return GlWipCost;
};
