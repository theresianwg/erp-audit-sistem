'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Asuransi extends Model {
        static associate(models) {
            Asuransi.hasMany(models.Employee, {
                foreignKey: 'asuransiId',
                as: 'employees',
            });
        }
    }

    Asuransi.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            address: {
                type: DataTypes.STRING,
            },
            phone: {
                type: DataTypes.STRING,
            },
            email: {
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
            modelName: 'Asuransi',
            tableName: 'hrm_asuransi',
        },
    );

    return Asuransi;
};
