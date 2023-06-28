'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('mf_inspection_products', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            rp_id: {
                type: Sequelize.STRING,
                // references: {
                //     model: 'mf_receive_products',
                //     key: 'id',
                // },
                // onDelete: 'CASCADE',
                // onUpdate: 'CASCADE',
            },
            item_id: {
                type: Sequelize.STRING,
                // references: {
                //     model: 'in_items',
                //     key: 'id',
                // },
                // onDelete: 'CASCADE',
                // onUpdate: 'CASCADE',
            },
            ip_entry_date: {
                type: Sequelize.DATE,
            },
            ip_qty: {
                type: Sequelize.DOUBLE,
            },
            ip_result: {
                type: Sequelize.STRING,
            },
            ip_qty_reject: {
                type: Sequelize.DOUBLE,
            },
            ip_approval: {
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
        await queryInterface.dropTable('mf_inspection_products');
    },
};
