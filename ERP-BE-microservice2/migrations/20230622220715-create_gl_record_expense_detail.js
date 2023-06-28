'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gl_record_expense_details', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            value:{
                type: Sequelize.INTEGER,
            },
            id_coa: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            id_record_expense: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gl_record_expenses',
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
        await queryInterface.dropTable('gl_record_expense_details');
    },
};
