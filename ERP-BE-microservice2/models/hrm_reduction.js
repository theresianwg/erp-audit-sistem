'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Reduction extends Model {
        static associate(models) {
            Reduction.belongsToMany(models.SalarySlip, {
                through: 'SalaryReduction',
                foreignKey: 'reduction_id',
                as: 'salaries',
            });
        }
    }

    Reduction.init(
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
                type: DataTypes.ENUM('Pajak', 'Pensiun', 'Asuransi'),
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
            modelName: 'Reduction',
            tableName: 'hrm_reductions',
        },
    );

    return Reduction;
};
