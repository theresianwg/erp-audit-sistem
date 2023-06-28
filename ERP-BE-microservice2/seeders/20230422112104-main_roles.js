'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('main_roles', [
            {
                id: 'RL00001',
                roleClass: 'Super Admin',
                name: 'Superadmin',
                description:
                    'Superadmin with full access to all modules and features',
                companyId: 'CMP00001', // Ganti dengan ID perusahaan yang sesuai
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 'RL00002',
                roleClass: 'Company Employee',
                name: 'Useradmin',
                description:
                    'Regular user with limited access to selected modules and features',
                companyId: 'CMP00001', // Ganti dengan ID perusahaan yang sesuai
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 'RL00003',
                roleClass: 'Company Guest',
                name: 'Guest',
                description:
                    'Guest with very limited access to selected modules and features',
                companyId: 'CMP00001', // Ganti dengan ID perusahaan yang sesuai
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            // ...
            // Tambahkan role lain sesuai dengan kebutuhan
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('main_roles', null, {});
    },
};
