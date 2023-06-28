'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TaTax extends Model {
        static associate(models) {

            TaTax.belongsTo(models.TaTaxCredentials, {
                foreignKey: 'taxcredentialsid',
                as: 'tataxcredentials',
            });

            TaTax.hasMany(models.TaTaxItem, {
                foreignKey: 'taxid',
            });
        }
    }
    TaTax.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            tax_type: DataTypes.STRING,
            tax_name: DataTypes.STRING,
            percentage: DataTypes.FLOAT,
            taxcredentialsid: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'TaTaxCredentials',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            modelName: 'TaTax',
            tableName: 'ta_tax',
        },
    );
    return TaTax;
};
