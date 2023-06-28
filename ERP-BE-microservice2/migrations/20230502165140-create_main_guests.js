'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('main_guests', {
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
            occupation: {
                // job
                allowNull: false,
                type: Sequelize.STRING,
            },
            instance: {
                // instansi = asal perusahaan
                allowNull: false,
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('main_guests');
    },
};
