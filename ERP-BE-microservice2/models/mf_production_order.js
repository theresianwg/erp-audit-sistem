'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class production_order extends Model {
        static associate(models) {
            // define association here
            production_order.belongsTo(models.MfProductionRequest, {
                foreignKey: 'pr_id',
            });
            production_order.hasOne(models.MfReceiveProduct, {
                foreignKey: 'po_id',
            });
            production_order.belongsTo(models.InItem, {
                foreignKey: 'item_id',
            });
            production_order.hasOne(models.MfJobOrder, {
                foreignKey: 'po_id',
            });
            production_order.hasOne(models.GlWipCost, {
                foreignKey: 'po_id',
            });
            production_order.hasOne(models.GlWipCostClosing, {
                foreignKey: 'po_id',
            });
            production_order.hasOne(models.GlWipqtyClosing, {
                foreignKey: 'po_id',
            });
            production_order.hasMany(models.MfMachineUsage, {
                foreignKey: 'po_id',
            });
            production_order.hasMany(models.MfTransferOrder, {
                foreignKey: 'po_id',
            });
            production_order.hasOne(models.ABCPerItem, {
                foreignKey: 'po_id',
                as: 'abc_item'
            });
            production_order.hasOne(models.MfCostAccounting, {
                foreignKey: 'po_id',
            });
        }
    }
    production_order.init(
        {
            pr_id: DataTypes.STRING,
            item_id: DataTypes.STRING,
            po_qty: DataTypes.DOUBLE,
            po_start: DataTypes.DATE,
            po_end: DataTypes.DATE,
            po_status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'MfProductionOrder',
            tableName: 'mf_production_orders',
        },
    );
    return production_order;
};
