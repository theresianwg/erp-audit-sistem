'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Schedule extends Model {
        static associate(models) {
            Schedule.belongsToMany(models.Employee, {
                through: 'Presence',
                foreignKey: 'scheduleId',
                as: 'employees',
            });

            Schedule.belongsTo(models.Job, {
                foreignKey: 'jobId',
                as: 'job',
            });
        }
    }

    Schedule.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            jobId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'hrm_jobs',
                    key: 'id',
                },
            },
            timeStart: {
                type: DataTypes.STRING,
            },
            timeEnd: {
                type: DataTypes.STRING,
            },
            workDate: {
                type: DataTypes.DATE,   
            },
            currentNumberOfWorker: {
                type: DataTypes.INTEGER,
            },
            neededNumberOfWorker: {
                type: DataTypes.INTEGER,
            },
            isOvertime: {
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
            modelName: 'Schedule',
            tableName: 'hrm_schedules',
        },
    );

    return Schedule;
};
