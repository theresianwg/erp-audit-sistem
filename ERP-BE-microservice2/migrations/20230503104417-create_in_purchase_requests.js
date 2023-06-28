'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('in_purchase_requests', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            est_total_price: {
                type: Sequelize.FLOAT,
                defaultValue: 0
            },
            est_total_tax: {
                type: Sequelize.FLOAT,
                defaultValue: 0
            },
            est_total_price_tax: {
                type: Sequelize.FLOAT,
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
        await queryInterface.dropTable('in_purchase_requests');
    },
};
