'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InPurchaseRequestDetail extends Model {
        static associate(models) {
            InPurchaseRequestDetail.belongsTo(models.InPurchaseRequest, {
                foreignKey: 'id_purchase_request',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
            InPurchaseRequestDetail.belongsTo(models.InItem, {
                foreignKey: 'id_item',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
        }
    }
    InPurchaseRequestDetail.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            id_purchase_request: DataTypes.STRING,
            id_item: DataTypes.STRING,
            quantity: DataTypes.FLOAT,
            ordered: DataTypes.BOOLEAN,
            budgetStatus: DataTypes.BOOLEAN,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'InPurchaseRequestDetail',
            tableName: 'in_purchase_request_details',
        },
    );
    return InPurchaseRequestDetail;
};
