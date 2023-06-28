// modules\main\app\models\Employee.js
'use strict';
const { Model } = require('sequelize');
const { generateEmployeeId } = require('../modules/main/app/utils/idGenerator');
const { countryCode } = require('../modules/main/app/utils/countryCode');

module.exports = (sequelize, DataTypes) => {
    class Employee extends Model {
        static associate(models) {
            Employee.belongsTo(models.Role, {
                foreignKey: 'roleId',
                as: 'role',
            });

            Employee.belongsTo(models.Position, {
                foreignKey: 'positionId',
                as: 'position',
            });

            Employee.belongsTo(models.PTKP, {
                foreignKey: 'ptkpId',
                as: 'ptkp',
            });

            Employee.hasMany(models.FamilyMember, {
                foreignKey: 'employeeId',
                as: 'families',
            });

            Employee.hasMany(models.Bukpot, {
                foreignKey: 'employeeId',
                as: 'bukpots',
            });

            Employee.hasMany(models.SalarySlip, {
                foreignKey: 'employeeId',
                as: 'salary_slips',
            });

            Employee.hasMany(models.Bukpot, {
                foreignKey: 'pemotongId',
                as: 'pemotong_bukpots',
            });

            Employee.belongsToMany(models.Schedule, {
                through: 'Presence',
                foreignKey: 'employeeId',
                as: 'schedules',
            });

            Employee.belongsTo(models.Amal, {
                foreignKey: 'amalId',
                as: 'amal',
            });

            Employee.belongsTo(models.Asuransi, {
                foreignKey: 'asuransiId',
                as: 'asuransi',
            });
        }

        static async generateId() {
            const lastEmployee = await this.findOne({
                order: [['createdAt', 'DESC']],
            });

            const lastNumber = lastEmployee
                ? parseInt(lastEmployee.nip.slice(3))
                : 0;
            return generateEmployeeId(lastNumber + 1);
        }
    }

    Employee.init(
        {
            // NIP = ID
            nip: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING,
            },

            // Foreign Key
            roleId: {
                allowNull: false,
                type: DataTypes.STRING,
                references: {
                    model: 'main_roles',
                    key: 'id',
                },
            },
            positionId: {
                allowNull: true,
                type: DataTypes.INTEGER,
                references: {
                    model: 'hrm_positions',
                    key: 'id',
                },
            },
            ptkpId: {
                allowNull: true,
                type: DataTypes.INTEGER,
                references: {
                    model: 'hrm_ptkps',
                    key: 'id',
                },
            },
            amalId: {
                allowNull: true,
                type: DataTypes.INTEGER,
                references: {
                    model: 'hrm_amal',
                    key: 'id',
                },
            },
            asuransiId: {
                allowNull: true,
                type: DataTypes.INTEGER,
                references: {
                    model: 'hrm_asuransi',
                    key: 'id',
                },
            },

            // Auth
            username: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            resetToken: DataTypes.STRING,
            verificationState: {
                type: DataTypes.ENUM('Not Verified', 'Requested', 'Verified'),
                defaultValue: 'Not Verified',
            },

            // Data Penting
            npwp: DataTypes.STRING, // Nomor Pokok Wajib Pajak
            nik: DataTypes.STRING, // Nomor Induk Kependudukan
            fullname: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            gender: {
                type: DataTypes.ENUM('Perempuan', 'Laki-laki'),
            },
            isForeign: {
                allowNull: false,
                type: DataTypes.BOOLEAN,
            },
            countryCode: {
                allowNull: false,
                type: DataTypes.ENUM(...countryCode),
            },
            education: DataTypes.STRING,
            joinDate: {
                allowNull: false,
                type: DataTypes.DATE,
            },

            // Pas Foto
            imageUrl: DataTypes.STRING,
            signatureUrl: DataTypes.STRING,

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
            modelName: 'Employee',
            tableName: 'main_employees',
        },
    );

    return Employee;
};
