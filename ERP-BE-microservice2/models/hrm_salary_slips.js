'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class SalarySlip extends Model {
        static associate(models) {
            SalarySlip.belongsTo(models.Employee, {
                foreignKey: 'employeeId',
                as: 'employee',
            });
            SalarySlip.belongsToMany(models.Income, {
                through: 'SalaryIncome',
                foreignKey: 'ss_id',
                as: 'incomes',
            });
            SalarySlip.belongsToMany(models.Reduction, {
                through: 'SalaryReduction',
                foreignKey: 'ss_id',
                as: 'reductions',
            });
        }
    }

    SalarySlip.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            employeeId: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING,
                references: {
                    model: 'main_employees',
                    key: 'nip',
                },
            },
            startDate: {
                type: DataTypes.DATE,
            },
            lastDate: {
                type: DataTypes.DATE,
            },
            gajiBersih: {
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
            modelName: 'SalarySlip',
            tableName: 'hrm_salary_slips',
        },
    );

    return SalarySlip;
};
