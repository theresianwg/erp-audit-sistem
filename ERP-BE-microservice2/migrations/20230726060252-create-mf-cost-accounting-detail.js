'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('mf_cost_accounting_details', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            ca_id: {
                type: Sequelize.STRING,
                // references: {
                //     model: 'mf_cost_accountings',
                //     key: 'id',
                // },
                // onDelete: 'CASCADE',
                // onUpdate: 'CASCADE',
            },
            jod_id: {
                type: Sequelize.STRING,
                // references: {
                //     model: 'mf_job_order_details',
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
            qty_produced: {
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
            m_duration: {
                type: Sequelize.TIME,
            },
            mn_skill_id: {
                type: Sequelize.STRING,
                // references: {
                //     model: 'mf_man_skills',
                //     key: 'id',
                // },
                // onDelete: 'CASCADE',
                // onUpdate: 'CASCADE',
            },
            mn_skill_qty: {
                type: Sequelize.INTEGER,
            },
            material_cost: {
                type: Sequelize.DOUBLE,
            },
            machine_cost: {
                type: Sequelize.DOUBLE,
            },
            man_cost: {
                type: Sequelize.DOUBLE,
            },
            total_cost: {
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
        await queryInterface.dropTable('mf_cost_accounting_details');
    },
};
