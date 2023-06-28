'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class LogBook extends Model {
        static associate(models) {
            LogBook.belongsTo(models.Presence, {
                foreignKey: 'presenceId',
                as: 'presence',
            });
        }
    }

    LogBook.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.BIGINT,
                autoIncrement: true,
            },
            presenceId: {
                type: DataTypes.BIGINT,
                allowNull: false,
                references: {
                    model: 'hrm_presences',
                    key: 'id',
                },
            },
            resume: {
                type: DataTypes.TEXT,
            },
            progress: {
                type: DataTypes.TEXT,
            },
            toDoList: {
                type: DataTypes.TEXT,
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
            modelName: 'LogBook',
            tableName: 'hrm_log_books',
        },
    );

    return LogBook;
};
