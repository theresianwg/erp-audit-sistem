'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InPurchaseOrderDetail extends Model {
        static associate(models) {
            InPurchaseOrderDetail.belongsTo(models.InPurchaseOrder, {
                foreignKey: 'id_purchase_order',
            });
            InPurchaseOrderDetail.belongsTo(models.InItem, {
                foreignKey: 'id_item',
                targetKey: 'id',
            });
        }
    }
    InPurchaseOrderDetail.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            id_purchase_order: DataTypes.STRING,
            id_item: DataTypes.STRING,
            quantity: DataTypes.FLOAT,
            unit: DataTypes.STRING,
            price: DataTypes.FLOAT,
            tax: DataTypes.FLOAT,
            total: DataTypes.FLOAT,
            budgetStatus: DataTypes.BOOLEAN,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'InPurchaseOrderDetail',
            tableName: 'in_purchase_order_details',
        },
    );
    return InPurchaseOrderDetail;
};
