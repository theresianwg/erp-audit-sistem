'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hrm_bukpot', [
      {
        id: 1,
        employeeId: "EMP00002",
        pemotongId: "EMP00001",
        ptkpId: 3,
        year: 2023,
        gaji: 150000000.0,
        tunjanganPPh: 0.0,
        tunjanganLain: 0.0,
        honorariumImbalan: 0.0,
        premiAsuransi: 0.0,
        natura: 0.0,
        gratifikasiTHR: 5000000.0,
        biayaJabatanPensiun: 6000000.0,
        iuranPensiun: 1020000.0,
        netoSebelum: 0.0,
        pajak: 6747000.0,
        pajakTelahDipotong: 0.0,
        pajakLunas: 6747000.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('hrm_bukpot', null, {});
    },
};
