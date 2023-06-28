'use strict';

const { Sequelize } = require('sequelize');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ta_tax_item', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            taxid: {
                type: Sequelize.STRING,
                allowNull: false,
                // references: {
                //     model: 'tatax',
                //     key: 'id',
                // },
            },
            item_id: {
                type: Sequelize.STRING,
                allowNull: false,
                // references: {
                //     model: 'InItem',
                //     key: 'id',
                // },
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('ta_tax_item');
    },
};
