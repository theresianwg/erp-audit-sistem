'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InSalesOrderDetail extends Model {
        static associate(models) {
            InSalesOrderDetail.belongsTo(models.InSalesOrder, {
                foreignKey: 'id_sales_order',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
            InSalesOrderDetail.belongsTo(models.InItem, {
                foreignKey: 'id_item',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
        }
    }
    InSalesOrderDetail.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            id_sales_order: DataTypes.STRING,
            id_item: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            price: DataTypes.FLOAT,
            tax: DataTypes.FLOAT,
            total: DataTypes.FLOAT,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'InSalesOrderDetail',
            tableName: 'in_sales_order_details',
        },
    );
    return InSalesOrderDetail;
};
