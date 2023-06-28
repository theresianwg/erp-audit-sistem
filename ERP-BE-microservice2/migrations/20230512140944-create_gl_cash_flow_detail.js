'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gl_cash_flow_details', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            CF_Name_Activity: {
                type: Sequelize.STRING,
            },
            CF_Type: {
                // Operating, Investing, Financing
                type: Sequelize.STRING,
            },
            CF_Amount: {
                type: Sequelize.INTEGER,
            },
            id_cash_flow: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
};
