'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ap_adjustments', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            adjustment_type: {
                type: Sequelize.ENUM('credit', 'debit', 'other'),
                allowNull: false,
            },
            adjustment_date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            adjustment_reason: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            approval_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            adjustment_document: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            approval_status: {
                type: Sequelize.ENUM('pending', 'approved', 'rejected'),
                allowNull: false,
                defaultValue: 'pending',
            },
            related_invoice_id: {
                type: Sequelize.STRING,
                allowNull: true,
                references: {
                    model: 'ap_purchase_invoices',
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
        await queryInterface.dropTable('ap_adjustments');
    },
};
