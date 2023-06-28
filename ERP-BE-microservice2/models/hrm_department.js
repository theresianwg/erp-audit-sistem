'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Department extends Model {
        static associate(models) {
            Department.hasMany(models.RequestHR, {
                foreignKey: 'departmentId',
                as: 'request_hrs',
            });

            Department.belongsTo(models.Company, {
                foreignKey: 'companyId',
                as: 'company',
            });
        }
    }

    Department.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            companyId: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'main_companies',
                    key: 'id',
                },
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
            },
            currentNumberOfEmployee: {
                allowNull: false,
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            neededNumberOfEmployee: {
                allowNull: false,
                type: DataTypes.INTEGER,
                defaultValue: 0,
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
            modelName: 'Department',
            tableName: 'hrm_departments',
        },
    );

    return Department;
};
