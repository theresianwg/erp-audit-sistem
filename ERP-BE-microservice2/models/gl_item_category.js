'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlItemCategory extends Model {
        static associate(models) {
            GlItemCategory.hasMany(models.GlWipCostClosing, {
                foreignKey: 'id_item_category',
            }),
                GlItemCategory.hasMany(models.GlWipCost, {
                    foreignKey: 'id_item_category',
                });
            GlItemCategory.hasMany(models.InItem, {
                foreignKey: 'id_category',
            });
        }
    }
    GlItemCategory.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            Category_Name: DataTypes.STRING,
            Category_Code: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'GlItemCategory',
            tableName: 'gl_item_categories',
        },
    );
    return GlItemCategory;
};
