'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Income extends Model {
        static associate(models) {
            Income.belongsToMany(models.SalarySlip, {
                through: 'SalaryIncome',
                foreignKey: 'income_id',
                as: 'salaries',
            });
        }
    }

    Income.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            type: {
                allowNull: false,
                type: DataTypes.ENUM('Gaji Pokok', 'Tunjangan PPh', 'Tunjangan Lain', 'Imbalan Lain', 'Premi Asuransi', 'Natura', 'Bonus'),
            },
            elementOfType: {
                allowNull: false,
                type: DataTypes.ENUM('Tetap', 'Honorer', 'Tetap & Honorer'),   
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
            modelName: 'Income',
            tableName: 'hrm_incomes',
        },
    );

    return Income;
};
