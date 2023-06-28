'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class KartuKeluarga extends Model {
        static associate(models) {
            KartuKeluarga.belongsTo(models.Employee, {
                foreignKey: 'employeeId',
                as: 'employee',
            });
        }
    }

    KartuKeluarga.init(
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
            },
            docLink: {
                type: DataTypes.STRING,
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
            modelName: 'KartuKeluarga',
            tableName: 'hrm_kartu_keluargas',
        },
    );

    return KartuKeluarga;
};
