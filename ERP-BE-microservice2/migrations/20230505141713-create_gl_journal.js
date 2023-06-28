'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gl_journals', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            Journal_Code: {
                //ngelink ke id_numbering
                type: Sequelize.STRING,
            },
            Journal_Ref: {
                type: Sequelize.STRING,
            },
            Journal_Post_Date: {
                type: Sequelize.DATEONLY
            },
            Journal_Notes: {
                type: Sequelize.STRING,
            },
            Journal_Amount: {
                type: Sequelize.INTEGER,
            },
            Journal_Approval_Status: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            Journal_Post_Status: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
            },
            id_accounting_period: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gl_accounting_periods',
                    key: 'id',
                },
            },
            id_numbering:{
                type :Sequelize.INTEGER,
                allowNull: false,
            },
            wc_id: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'WC4111',
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
        await queryInterface.dropTable('gl_journals');
    },
};
