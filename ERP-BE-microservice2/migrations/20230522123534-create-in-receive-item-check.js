'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('in_receive_item_checks', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            id_received_item: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'in_receive_items',
                    key: 'id',
                    on_delete: 'CASCADE',
                    on_update: 'CASCADE',
                },
            },
            id_item: {
                type: Sequelize.STRING,
            },
            approved_quantity: {
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
        await queryInterface.dropTable('in_receive_item_checks');
    },
};
