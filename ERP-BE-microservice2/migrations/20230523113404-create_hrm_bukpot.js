'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('hrm_bukpot', { 
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true,
        },
        employeeId: {
            allowNull: false,
            type: Sequelize.STRING,
            references: {
                model: 'main_employees',
                key: 'nip',
            },
        },
        pemotongId: {
            allowNull: false,
            type: Sequelize.STRING,
            references: {
                model: 'main_employees',
                key: 'nip',
            },
        },
        ptkpId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'hrm_ptkps',
                key: 'id',
            },
        },
        year: {
            allowNull: false, 
            type: Sequelize.INTEGER,
        },
        gaji:  {
            type: Sequelize.DOUBLE,
            defaultValue: 0
        },
        tunjanganPPh: {
            type: Sequelize.DOUBLE,
            defaultValue: 0
        },
        tunjanganLain:{
            type: Sequelize.DOUBLE,
            defaultValue: 0
        },
        honorariumImbalan:{
            type: Sequelize.DOUBLE,
            defaultValue: 0
        },
        premiAsuransi: {
            type: Sequelize.DOUBLE,
            defaultValue: 0
        },
        natura: {
            type: Sequelize.DOUBLE,
            defaultValue: 0
        },
        gratifikasiTHR: {
            type: Sequelize.DOUBLE,
            defaultValue: 0
        },
        biayaJabatanPensiun: {
            type: Sequelize.DOUBLE,
            defaultValue: 0
        },
        iuranPensiun: {
            type: Sequelize.DOUBLE,
            defaultValue: 0
        },
        netoSebelum: {
            type: Sequelize.DOUBLE,
            defaultValue: 0
        },
        pajak: {
            type: Sequelize.DOUBLE,
            defaultValue: 0
        },
        pajakTelahDipotong: {
            type: Sequelize.DOUBLE,
            defaultValue: 0
        },
        pajakLunas: {
            type: Sequelize.DOUBLE,
            defaultValue: 0
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    });
  },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('hrm_bukpot');
    },
};
