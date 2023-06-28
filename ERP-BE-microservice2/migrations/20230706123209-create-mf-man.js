'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('mf_mans', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            mn_name: {
                type: Sequelize.STRING,
            },
            mn_id_skill: {
                type: Sequelize.STRING,
                // references: {
                //     model: 'mf_man_skills',
                //     key: 'id',
                // },
                // onDelete: 'CASCADE',
                // onUpdate: 'CASCADE',
            },
            mn_costph: {
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
        await queryInterface.dropTable('mf_mans');
    },
};
