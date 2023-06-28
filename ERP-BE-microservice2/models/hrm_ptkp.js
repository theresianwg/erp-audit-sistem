'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PTKP extends Model {
        static associate(models) {
            PTKP.hasMany(models.Employee, {
                foreignKey: 'ptkpId',
                as: 'employees',
            });

            PTKP.hasMany(models.Bukpot, {
                foreignKey: 'ptkpId',
                as: 'bukpots',
            });
        }
    }

    PTKP.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            description: {
                type: DataTypes.TEXT,
            },
            status: {
                type: DataTypes.STRING,
            },
            amount: {
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
            modelName: 'PTKP',
            tableName: 'hrm_ptkps',
        },
    );

    return PTKP;
};
