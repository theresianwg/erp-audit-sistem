'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InSalesOrder extends Model {
        static associate(models) {
            InSalesOrder.belongsTo(models.InCustomer, {
                foreignKey: 'id_customer',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
            InSalesOrder.hasMany(models.InSalesOrderDetail, {
                foreignKey: 'id_sales_order',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
            InSalesOrder.hasMany(models.MfProductionRequest, {
                foreignKey: 'so_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
            InSalesOrder.hasOne(models.InTransferToCustomer, {
                foreignKey: 'id_so',
            });
        }
    }
    InSalesOrder.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            id_customer: DataTypes.STRING,
            total_price: DataTypes.FLOAT,
            total_tax: DataTypes.FLOAT,
            total_price_tax: DataTypes.FLOAT,
            payment_type: DataTypes.ENUM('cash', 'dp_money', 'dp_percent'),
            dp_percentage: DataTypes.INTEGER,
            dp_amount: DataTypes.FLOAT,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'InSalesOrder',
            tableName: 'in_sales_orders',
        },
    );
    return InSalesOrder;
};
