'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class FamilyMember extends Model {
        static associate(models) {
            FamilyMember.belongsTo(models.Employee, {
                foreignKey: 'employeeId',
                as: 'employee',
            });
        }
    }

    FamilyMember.init(
        {
            nik: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING,
            },
            employeeId: {
                allowNull: false,
                type: DataTypes.STRING,
                references: {
                    model: 'main_employees',
                    key: 'nip',
                },
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            role: {
                type: DataTypes.ENUM('Anak', 'Istri', 'Suami'),
                allowNull: false,
            },
            gender: {
                type: DataTypes.ENUM('Perempuan', 'Laki-laki'),
                allowNull: false,
            },
            dateOfBirth: {
                type: DataTypes.DATE,
            },
            education: {
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
            modelName: 'FamilyMember',
            tableName: 'hrm_family_members',
        },
    );

    return FamilyMember;
};
