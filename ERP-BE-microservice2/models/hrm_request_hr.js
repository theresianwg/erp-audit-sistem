'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class RequestHR extends Model {
        static associate(models) {
            RequestHR.belongsTo(models.Department, {
                foreignKey: 'departmentId',
                as: 'department',
            });
        }
    }

    RequestHR.init(
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
            details: {
                type: DataTypes.TEXT,
            },
            actionType: {
                type: DataTypes.ENUM('Routine', 'Uncommon'),
                allowNull: false,
            },
            amountOfWorker: {
                allowNull: false,
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            neededHourOfWork: { // per week/month if routine, per job if uncommon
                type: DataTypes.INTEGER,
            },
            deadline: { 
                type: DataTypes.DATE
            },
            periodical: {
                type: DataTypes.ENUM('Monthly', 'Weekly', 'Daily'),
            },
            acceptStatus: {
                type: DataTypes.ENUM('Requested', 'Need Revision', 'Accepted'),
            },
            isDone: {
                type: DataTypes.BOOLEAN,
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
            modelName: 'RequestHR',
            tableName: 'hrm_request_hrs',
        },
    );

    return RequestHR;
};
