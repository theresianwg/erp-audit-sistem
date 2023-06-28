'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('hrm_family_members', {
            nik: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            employeeId: {
                allowNull: false,
                type: Sequelize.STRING,
                references: {
                    model: 'main_employees',
                    key: 'nip',
                },
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            role: {
                type: Sequelize.ENUM('Anak', 'Istri', 'Suami'),
                allowNull: false,
            },
            gender: {
                type: Sequelize.ENUM('Perempuan', 'Laki-laki'),
                allowNull: false,
            },
            dateOfBirth: {
                type: Sequelize.DATE,
            },
            education: {
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
        await queryInterface.dropTable('hrm_family_members');
    },
};
