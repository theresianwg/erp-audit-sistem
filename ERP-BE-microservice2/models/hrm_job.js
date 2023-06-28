'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Job extends Model {
        static associate(models) {
            Job.belongsTo(models.RequestHR, {
                foreignKey: 'reqHRId',
                as: 'reqHR',
            });

            Job.hasMany(models.Schedule, {
                foreignKey: 'jobId',
                as: 'schedules',
            });
        }
    }

    Job.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            reqHRId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'hrm_request_hrs',
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
            objective: {
                type: DataTypes.TEXT,
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
            modelName: 'Job',
            tableName: 'hrm_jobs',
        },
    );

    return Job;
};
