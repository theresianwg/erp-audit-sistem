'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InInventory extends Model {
        static associate(models) {
            InInventory.belongsTo(models.InItem, {
                foreignKey: 'item_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
        }
    }
    InInventory.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            item_id: DataTypes.STRING,
            quantity: DataTypes.FLOAT,
            item_unit: DataTypes.STRING,
            daily_consume: DataTypes.FLOAT,
            lead_time: DataTypes.FLOAT,
            safety_stock: DataTypes.FLOAT,
            reorder_point: DataTypes.FLOAT,
            eoq: DataTypes.FLOAT,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'InInventory',
            tableName: 'in_inventories',
        },
    );
    return InInventory;
};
