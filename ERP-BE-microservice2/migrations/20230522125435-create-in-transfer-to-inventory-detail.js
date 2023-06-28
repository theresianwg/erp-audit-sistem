'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('in_transfer_to_inventory_details', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            id_to: {
                type: Sequelize.STRING,
                references: {
                    model: 'in_transfer_to_inventories',
                    key: 'id',
                    on_delete: 'CASCADE',
                    on_update: 'CASCADE',
                },
            },
            id_item: {
                type: Sequelize.STRING,
            },
            quantity: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('in_transfer_to_inventory_details');
    },
};
