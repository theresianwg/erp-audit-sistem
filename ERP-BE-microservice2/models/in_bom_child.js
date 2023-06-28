'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InBomChild extends Model {
        static associate(models) {
            InBomChild.belongsTo(models.InBomParent, {
                foreignKey: 'id_bom_parent',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
            InBomChild.belongsTo(models.InItem, {
                foreignKey: 'id_child_item',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
        }
    }
    InBomChild.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_bom_parent: DataTypes.STRING,
            id_child_item: DataTypes.STRING,
            quantity: DataTypes.FLOAT,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'InBomChild',
            tableName: 'in_bom_children',
        },
    );
    return InBomChild;
};
