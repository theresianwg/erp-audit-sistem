'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.addColumn('fa_assets', 'id_group', {
            type: Sequelize.INTEGER,
            allowNull: true,
        });
        await queryInterface.addColumn('fa_assets', 'id_number_group', {
            type: Sequelize.INTEGER,
            allowNull: true,
        });
        await queryInterface.addColumn('fa_assets', 'status_asset', {
            type: Sequelize.STRING,
            allowNull: true,
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.removeColumn('fa_assets', 'id_group');
        await queryInterface.removeColumn('fa_assets', 'id_number_group');
        await queryInterface.removeColumn('fa_assets', 'status_asset');
    },
};
