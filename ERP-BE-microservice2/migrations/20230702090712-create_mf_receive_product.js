'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('mf_receive_products', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            po_id: {
                type: Sequelize.STRING,
                references: {
                    model: 'mf_production_orders',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            // add foreign key
            item_id: {
                type: Sequelize.STRING,
                references: {
                    model: 'in_items',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            rp_qty: {
                type: Sequelize.DOUBLE,
            },
            rp_date: {
                type: Sequelize.DATE,
            },
            rp_approval: {
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
        await queryInterface.dropTable('mf_receive_products');
    },
};
