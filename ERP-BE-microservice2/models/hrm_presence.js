'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Presence extends Model {
        static associate(models) {
            Presence.hasOne(models.LogBook, {
                foreignKey: 'presenceId',
                as: 'logbook',
            });
        }
    }

    Presence.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.BIGINT,
                autoIncrement: true,
            },
            employeeId: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'main_employees',
                    key: 'nip',
                },
            },
            scheduleId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'hrm_schedules',
                    key: 'id',
                },
            },
            presence: {
                allowNull: false,
                type: DataTypes.ENUM('Alfa', 'Izin', 'Hadir'),
            },
            meetingNumber: {
                type: DataTypes.INTEGER,
                allowNull: false,
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
            modelName: 'Presence',
            tableName: 'hrm_presences',
        },
    );

    return Presence;
};
