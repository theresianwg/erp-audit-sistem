'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class SalaryIncome extends Model {
        static associate(models) {

        }
    }

    SalaryIncome.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.BIGINT,
                autoIncrement: true,
            },
            ss_id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                references: {
                    model: 'hrm_salary_slips',
                    key: 'id',
                },
            },
            income_id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                references: {
                    model: 'hrm_incomes',
                    key: 'id',
                },
            },
            nominal: {
                allowNull: false,
                type: DataTypes.DOUBLE,
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
            modelName: 'SalaryIncome',
            tableName: 'hrm_salaries_incomes',
        },
    );

    return SalaryIncome;
};
