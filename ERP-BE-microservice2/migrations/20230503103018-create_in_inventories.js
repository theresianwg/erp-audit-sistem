'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('in_inventories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            item_id: {
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
            item_unit: {
                type: Sequelize.STRING,
            },
            daily_consume: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            lead_time: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
            },
            safety_stock: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
            },
            reorder_point: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
            },
            eoq: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
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
        await queryInterface.dropTable('in_inventories');
    },
};
