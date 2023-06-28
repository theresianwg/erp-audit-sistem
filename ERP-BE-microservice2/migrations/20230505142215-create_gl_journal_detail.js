'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gl_journal_details', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            JD_Credit: {
                type: Sequelize.INTEGER,
            },
            JD_Credit_Curr: {
                type: Sequelize.INTEGER,
            },
            JD_Debit: {
                type: Sequelize.INTEGER,
            },
            JD_Debit_Curr: {
                type: Sequelize.INTEGER,
            },
            id_coa: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            id_journal: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gl_journals',
                    key: 'id',
                },
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
        await queryInterface.dropTable('gl_journal_details');
    },
};
