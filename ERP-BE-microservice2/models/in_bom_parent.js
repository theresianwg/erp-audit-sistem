'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InBomParent extends Model {
        static associate(models) {
            InBomParent.belongsTo(models.InItem, {
                foreignKey: 'id_parent_item',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
            InBomParent.hasMany(models.InBomChild, {
                foreignKey: 'id_bom_parent',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
        }
    }
    InBomParent.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            id_parent_item: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'InBomParent',
            tableName: 'in_bom_parents',
        },
    );
    return InBomParent;
};
