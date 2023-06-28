'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class SalaryReduction extends Model {
        static associate(models) {

        }
    }

    SalaryReduction.init(
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
            reduction_id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                references: {
                    model: 'hrm_reductions',
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
            modelName: 'SalaryReduction',
            tableName: 'hrm_salaries_reductions',
        },
    );

    return SalaryReduction;
};
