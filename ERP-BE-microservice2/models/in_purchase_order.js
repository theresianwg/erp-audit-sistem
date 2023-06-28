'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InPurchaseOrder extends Model {
        static associate(models) {
            InPurchaseOrder.belongsTo(models.InPurchaseRequest, {
                foreignKey: 'id_purchase_request',
            });
            InPurchaseOrder.belongsTo(models.InSupplier, {
                foreignKey: 'id_supplier',
            });
            InPurchaseOrder.hasMany(models.InPurchaseOrderDetail, {
                foreignKey: 'id_purchase_order',
            });
            InPurchaseOrder.hasOne(models.InReceiveItem, {
                foreignKey: 'id_action',
            });
        }
    }
    InPurchaseOrder.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            id_purchase_request: DataTypes.STRING,
            id_supplier: DataTypes.STRING,
            total_price: DataTypes.FLOAT,
            total_tax: DataTypes.FLOAT,
            total_price_tax: DataTypes.FLOAT,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'InPurchaseOrder',
            tableName: 'in_purchase_orders',
        },
    );
    return InPurchaseOrder;
};
