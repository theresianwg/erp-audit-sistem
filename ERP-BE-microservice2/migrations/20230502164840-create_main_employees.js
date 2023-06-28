'use strict';

const { countryCode } = require('../modules/main/app/utils/countryCode');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('main_employees', {
            nip: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
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
            positionId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'hrm_positions',
                    key: 'id',
                },
            },

            ptkpId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'hrm_ptkps',
                    key: 'id',
                },
            },

            amalId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'hrm_amal',
                    key: 'id',
                },
            },
            asuransiId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'hrm_asuransi',
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
            verificationState: {
                type: Sequelize.ENUM('Not Verified', 'Requested', 'Verified'),
                defaultValue: 'Not Verified',
            },

            // Data Penting
            npwp: Sequelize.STRING,
            nik: Sequelize.STRING,
            fullname: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            address: Sequelize.STRING,
            phone: Sequelize.STRING,
            gender: {
                type: Sequelize.ENUM('Perempuan', 'Laki-laki'),
                allowNull: false,
            },
            isForeign: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
            },
            countryCode: {
                allowNull: false,
                type: Sequelize.ENUM(...countryCode),
            },
            education: Sequelize.STRING,
            joinDate: {
                allowNull: false,
                type: Sequelize.DATE,
            },

            // Pas Foto
            imageUrl: Sequelize.STRING,
            signatureUrl: Sequelize.STRING,

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
        await queryInterface.dropTable('main_employees');
    },
};
