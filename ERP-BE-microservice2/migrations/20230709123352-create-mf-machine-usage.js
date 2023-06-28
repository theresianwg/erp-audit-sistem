'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('mf_machine_usages', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            po_id: {
                type: Sequelize.STRING,
                // references: {
                //     model: 'mf_production_orders',
                //     key: 'id',
                // },
                // onDelete: 'CASCADE',
                // onUpdate: 'CASCADE',
            },
            m_id: {
                type: Sequelize.STRING,
                // references: {
                //     model: 'mf_machines',
                //     key: 'id',
                // },
                // onDelete: 'CASCADE',
                // onUpdate: 'CASCADE',
            },
            mu_start: {
                type: Sequelize.DATE,
            },
            mu_end: {
                type: Sequelize.DATE,
            },
            mu_machine_usage: {
                type: Sequelize.TIME,
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
        await queryInterface.dropTable('mf_machine_usages');
    },
};
