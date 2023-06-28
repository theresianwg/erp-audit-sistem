'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InPurchaseRequest extends Model {
        static associate(models) {
            InPurchaseRequest.hasMany(models.InPurchaseRequestDetail, {
                foreignKey: 'id_purchase_request',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
        }
    }
    InPurchaseRequest.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            est_total_price: DataTypes.FLOAT,
            est_total_tax: DataTypes.FLOAT,
            est_total_price_tax: DataTypes.FLOAT,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'InPurchaseRequest',
            tableName: 'in_purchase_requests',
        },
    );
    return InPurchaseRequest;
};
