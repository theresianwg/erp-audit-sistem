'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gl_wip_transfers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            WTransfer_Cost: {
                type: Sequelize.FLOAT,
            },
            WTransfer_qty: {
                type: Sequelize.INTEGER,
            },
            WTransfer_PoNumberCredit: {
                type: Sequelize.STRING,
            },
            WTransfer_PoNumberDebit: {
                type: Sequelize.STRING,
            },
            WTransfer_WorkCenterCredit: {
                type: Sequelize.STRING,
            },
            WTransfer_WorkCenterDebit: {
                type: Sequelize.STRING,
            },
            WTransfer_Date: {
                type: Sequelize.DATE,
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
        await queryInterface.dropTable('gl_wip_transfers');
    },
};
