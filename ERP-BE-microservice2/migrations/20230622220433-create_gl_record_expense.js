'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gl_record_expenses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            RE_Code: {
                //ngelink ke id_numbering
                type: Sequelize.STRING,
            },
            RE_Post_Date: {
                type: Sequelize.DATEONLY
            },
            RE_Due_Date: {
                type: Sequelize.DATEONLY
            },
            RE_Total: {
                type: Sequelize.INTEGER,
            },
            RE_Paid: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            RE_Notes:{
                type: Sequelize.TEXT,
            },
            RE_Status: {
                type: Sequelize.ENUM('Sedang diproses', 'Lunas'),
                allowNull: false,
                defaultValue: 'Sedang diproses',
            },
            id_journal:{
              type :Sequelize.INTEGER, //nanti pas pembuatan record expense sekalian sama jurnalnya
              allowNull: false,
            },
            id_accounting_period: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gl_accounting_periods',
                    key: 'id',
                },
            },
            id_numbering:{
                type :Sequelize.INTEGER,
            },
            wc_id: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'WC4111',
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
        await queryInterface.dropTable('gl_record_expenses');
    },
};
