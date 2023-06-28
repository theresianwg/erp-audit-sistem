'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('mf_master_operations', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            o_name: {
                type: Sequelize.STRING,
            },
            o_desc: {
                type: Sequelize.STRING,
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
            item_max: {
                type: Sequelize.DOUBLE,
            },
            wc_id: {
                type: Sequelize.STRING,
                // references: {
                //     model: 'mf_workcentres',
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
            m_hour: {
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
        await queryInterface.dropTable('mf_master_operations');
    },
};
