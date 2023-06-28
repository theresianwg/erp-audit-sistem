'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ABCPerItem extends Model {
        static associate(models) {
            ABCPerItem.belongsTo(models.ABCPerMonth, {
                foreignKey: 'abc_per_month_id',
                as: 'abc_per_month',
            });
            ABCPerItem.belongsTo(models.MfProductionOrder, {
                foreignKey: 'po_id',
                as: 'production_order',
            });
        }
    }

    ABCPerItem.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            abc_per_month_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            po_id: {
                allowNull: false,
                type: DataTypes.STRING,
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
            modelName: 'ABCPerItem',
            tableName: 'cogs_activity_based_costing_per_item',
        },
    );

    return ABCPerItem;
};
