'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('main_super_admins', {
            id: {
                type: Sequelize.STRING,
                primaryKey: true,
                allowNull: false,
            },

            // Foreign Key
            roleId: {
                allowNull: false,
                type: Sequelize.STRING,
                references: {
                    model: 'main_roles',
                    key: 'id',
                },
            },

            // Auth
            username: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            resetToken: Sequelize.STRING,

            // ID
            fullname: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            gender: {
                type: Sequelize.ENUM('Perempuan', 'Laki-laki'),
            },
            description: {
                // deskripsi dari super admin, background/latar belakangnya, dll
                type: Sequelize.TEXT,
            },

            // Pas Foto
            imageUrl: Sequelize.STRING,

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
        await queryInterface.dropTable('main_super_admins');
    },
};
