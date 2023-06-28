'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CbCurrency extends Model {
        static associate(models) {}
    }
    CbCurrency.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            name: DataTypes.STRING,
            symbol: DataTypes.STRING,
            code: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'CbCurrency',
            tableName: 'cb_currencies',
        },
    );
    return CbCurrency;
};
