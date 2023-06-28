'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('in_transfer_to_customers', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            id_so: {
                type: Sequelize.STRING,
            },
            toc_datetime: {
                type: Sequelize.DATE,
            },
            status: {
                type: Sequelize.ENUM,
                values: [
                    'pending',
                    'on packing',
                    'on delivery',
                    'delivered',
                    'canceled',
                ],
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
        await queryInterface.dropTable('in_transfer_to_customers');
    },
};
