'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('hrm_pemotong_bukpot', {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            employeeId: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'main_employees',
                    key: 'nip',
                },
            },
            bukpotId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'hrm_bukpot',
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
        await queryInterface.dropTable('hrm_pemotong_bukpot');
    },
};
