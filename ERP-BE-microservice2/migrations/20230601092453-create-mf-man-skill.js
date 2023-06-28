'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('mf_man_skills', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            ms_skill: {
                type: Sequelize.STRING,
            },
            ms_skill_sallary: {
                type: Sequelize.INTEGER,
            },
            ms_skill_wroking_hour: {
                type: Sequelize.TIME,
            },
            ms_skill_costph: {
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
        await queryInterface.dropTable('mf_man_skills');
    },
};
