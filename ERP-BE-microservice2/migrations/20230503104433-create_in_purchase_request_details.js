'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('in_purchase_request_details', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            id_purchase_request: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'in_purchase_requests',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            id_item: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'in_items',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            quantity: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
            },
            ordered: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            budgetStatus: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
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
        await queryInterface.dropTable('in_purchase_request_details');
    },
};
