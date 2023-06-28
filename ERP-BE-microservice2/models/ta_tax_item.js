'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class TaTaxItem extends Model {
        static associate(models) {
            TaTaxItem.belongsTo(models.InItem, {
                foreignKey: 'item_id',
                as: 'InItem',
            });

            TaTaxItem.belongsTo(models.TaTax, {
                foreignKey: 'taxid',
                as: 'tatax',
            });
        }
    }
    TaTaxItem.init(
        {

        },
        {
            sequelize,
            modelName: 'TaTaxItem',
            tableName: 'ta_tax_item',
        },
    );
    return TaTaxItem;
};