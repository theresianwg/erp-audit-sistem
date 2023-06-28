'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gl_coa_groups', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            CG_Name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            CG_Calc: {
                type: Sequelize.STRING,
            },
            CG_Code: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull: false,
            },
            CG_Description: {
                type: Sequelize.TEXT,
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
        await queryInterface.dropTable('gl_coa_groups');
    },
};
