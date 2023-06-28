+'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gl_coas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            Coa_Name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            Coa_Number: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
            },
            Coa_Normal_Balance: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            Coa_Opening_Balance: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            Coa_Entity: {
                type: Sequelize.STRING,
                defaultValue: 'SBY',
            },
            Coa_Description: {
                type: Sequelize.TEXT,
            },
            id_transaction_type:{
                type: Sequelize.INTEGER,
                defaultValue: 1,
            },
            currency_id:{
                type: Sequelize.STRING,
                defaultValue: 'IDR'
            },
            wc_id: {
                type: Sequelize.STRING,
                // allowNull: false,
                defaultValue: 'WC4111',
            },
            id_coa_group: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gl_coa_groups',
                    key: 'id',
                },
            },
            id_account_type: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gl_account_types',
                    key: 'id',
                },
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
        await queryInterface.dropTable('gl_coas');
    },
};
