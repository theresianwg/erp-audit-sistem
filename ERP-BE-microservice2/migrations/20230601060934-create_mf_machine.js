'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('mf_machines', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            id_asset: {
                type: Sequelize.STRING,
            },
            m_desc: {
                type: Sequelize.STRING,
            },
            m_cost: {
                type: Sequelize.INTEGER,
            },
            m_working_hour: {
                type: Sequelize.TIME,
            },
            m_costph: {
                type: Sequelize.DOUBLE,
            },
            m_status: {
                type: Sequelize.STRING,
            },
            wc_id: {
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
        await queryInterface.dropTable('mf_machines');
    },
};
