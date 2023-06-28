'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Position extends Model {
        static associate(models) {
            Position.belongsTo(models.Department, {
                foreignKey: 'departmentId',
                as: 'department',
            });

            Position.hasMany(models.Employee, {
                foreignKey: 'positionId',
                as: 'positions',
            });
        }
    }

    Position.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            departmentId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'hrm_departments',
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
            level: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            managementSection: {
                type: DataTypes.ENUM('Top', 'Middle', 'Low'),
            },
            contractType: {
                allowNull: false,
                type: DataTypes.ENUM('Pegawai Honorer', 'Pegawai Tetap'),
            },
            contractCount: {
                allowNull: false,
                type: DataTypes.ENUM('Harian', 'Bulanan'),
            },
            workingHourPerWeek: {
                type: DataTypes.INTEGER,
            },
            salary: {
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
            modelName: 'Position',
            tableName: 'hrm_positions',
        },
    );

    return Position;
};
