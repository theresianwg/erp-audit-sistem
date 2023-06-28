'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('in_items', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            name: {
                type: Sequelize.STRING,
            },
            id_category: {
                type: Sequelize.INTEGER,
            },
            id_coa: {
                type: Sequelize.INTEGER,
            },
            id_tax: {
                type: Sequelize.INTEGER,
            },
            sale_price: {
                type: Sequelize.FLOAT,
            },
            sale_unit: {
                type: Sequelize.STRING,
            },
            buy_price: {
                type: Sequelize.FLOAT,
            },
            buy_unit: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('in_items');
    },
};
