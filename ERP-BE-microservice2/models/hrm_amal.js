'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Amal extends Model {
        static associate(models) {
            Amal.hasMany(models.Employee, {
                foreignKey: 'amalId',
                as: 'employees',
            });
        }
    }

    Amal.init(
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
            modelName: 'Amal',
            tableName: 'hrm_amal',
        },
    );

    return Amal;
};
