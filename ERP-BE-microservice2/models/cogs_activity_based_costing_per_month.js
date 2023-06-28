'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ABCPerMonth extends Model {
        static associate(models) {
            ABCPerMonth.hasMany(models.ABCPerItem, {
                foreignKey: 'abc_per_month_id',
                as: 'abc_items',
            });
        }
    }

    ABCPerMonth.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            bulan: {
                type: DataTypes.INTEGER,
                validate: {
                    min: 1,
                    max: 12,
                },
            },
            target_bruto: {
                type: DataTypes.INTEGER,
            },
            target_neto: {
                type: DataTypes.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: 'ABCPerMonth',
            tableName: 'cogs_activity_based_costing_per_month',
        },
    );

    return ABCPerMonth;
};
