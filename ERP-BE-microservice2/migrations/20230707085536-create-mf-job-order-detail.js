'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('mf_job_order_details', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            jo_id: {
                type: Sequelize.STRING,
                // references: {
                //     model: 'mf_job_orders',
                //     key: 'id',
                // },
                // onDelete: 'CASCADE',
                // onUpdate: 'CASCADE',
            },
            o_id: {
                type: Sequelize.STRING,
                // references: {
                //     model: 'mf_master_operations',
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
            jod_qty: {
                type: Sequelize.DOUBLE,
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
            jod_m_hour: {
                type: Sequelize.TIME,
            },
            jod_id_skill: {
                type: Sequelize.STRING,
                // references: {
                //     model: 'mf_man_skills',
                //     key: 'id',
                // },
                // onDelete: 'CASCADE',
                // onUpdate: 'CASCADE',
            },
            jod_man_qty: {
                type: Sequelize.DOUBLE,
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
        await queryInterface.dropTable('mf_job_order_details');
    },
};
