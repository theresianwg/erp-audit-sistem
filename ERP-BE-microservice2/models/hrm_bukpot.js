'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Bukpot extends Model {
        static associate(models) {
            Bukpot.belongsTo(models.Employee, {
                foreignKey: 'pemotongId',
                as: 'pemotong',
            });

            Bukpot.belongsTo(models.Employee, {
                foreignKey: 'employeeId',
                as: 'employee',
            });

            Bukpot.belongsTo(models.PTKP, {
                foreignKey: 'ptkpId',
                as: 'ptkp',
            });
        }
    }

    Bukpot.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            employeeId: {
                allowNull: false,
                type: DataTypes.STRING,
                references: {
                    model: 'main_employees',
                    key: 'nip',
                },
            },
            pemotongId: {
                allowNull: false,
                type: DataTypes.STRING,
                references: {
                    model: 'main_employees',
                    key: 'nip',
                },
            },
            ptkpId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'hrm_ptkps',
                    key: 'id',
                },
            },
            year: {
                allowNull: false, 
                type: DataTypes.INTEGER
            },
            gaji:  {
                type: DataTypes.DOUBLE,
                defaultValue: 0.0
            },
            tunjanganPPh: {
                type: DataTypes.DOUBLE,
                defaultValue: 0.0
            },
            tunjanganLain:{
                type: DataTypes.DOUBLE,
                defaultValue: 0.0
            },
            honorariumImbalan:{
                type: DataTypes.DOUBLE,
                defaultValue: 0.0
            },
            premiAsuransi: {
                type: DataTypes.DOUBLE,
                defaultValue: 0.0
            },
            natura: {
                type: DataTypes.DOUBLE,
                defaultValue: 0.0
            },
            gratifikasiTHR: {
                type: DataTypes.DOUBLE,
                defaultValue: 0.0
            },
            biayaJabatanPensiun: {
                type: DataTypes.DOUBLE,
                defaultValue: 0.0
            },
            iuranPensiun: {
                type: DataTypes.DOUBLE,
                defaultValue: 0.0
            },
            netoSebelum: {
                type: DataTypes.DOUBLE,
                defaultValue: 0.0
            },
            pajak: {
                type: DataTypes.DOUBLE,
                defaultValue: 0.0
            },
            pajakTelahDipotong: {
                type: DataTypes.DOUBLE,
                defaultValue: 0.0
            },
            pajakLunas: {
                type: DataTypes.DOUBLE,
                defaultValue: 0.0
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
            modelName: 'Bukpot',
            tableName: 'hrm_bukpot',
        },
    );

    return Bukpot;
};
