'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ApPurchaseDownPaymentInvoice extends Model {
        static associate(models) {
            ApPurchaseDownPaymentInvoice.belongsTo(models.InPurchaseOrder, {
                foreignKey: 'purchase_order_id',
                onDelete: 'CASCADE',
                as: 'purchase_order',
            });
            ApPurchaseDownPaymentInvoice.belongsTo(models.CbCurrency, {
                foreignKey: 'currency_id',
                as: 'currency',
            });
            ApPurchaseDownPaymentInvoice.belongsTo(models.ApPurchaseInvoice, {
                foreignKey: 'purchase_invoice_id',
                allowNull: true,
                as: 'purchase_invoice',
            });
        }
    }
    ApPurchaseDownPaymentInvoice.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING,
            },
            invoice_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            invoice_date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            due_date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            total_amount: {
                type: DataTypes.DECIMAL(15, 2),
                allowNull: false,
            },
            total_taxes: {
                type: DataTypes.DECIMAL(15, 2),
                allowNull: false,
            },
            total_price_item: {
                type: DataTypes.DECIMAL(15, 2),
                allowNull: false,
            },
            discounts: {
                type: DataTypes.DECIMAL(15, 2),
                allowNull: true,
            },
            received_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            purchase_order_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            payment_status: {
                type: DataTypes.ENUM(
                    'pending',
                    'cancelled',
                    'verified',
                    'succeeded',
                ),
                allowNull: false,
                defaultValue: 'pending',
            },
            description: DataTypes.TEXT,
            dp_percent: {
                type: DataTypes.DECIMAL(5, 2),
                allowNull: true,
            },
            dp_paid_amount: {
                type: DataTypes.DECIMAL(15, 2),
                allowNull: false,
            },
            taxes_included: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
            remaining_payments: {
                type: DataTypes.DECIMAL(15, 2),
                allowNull: false,
            },
            dp_method: {
                type: DataTypes.ENUM('percent', 'cash'),
                allowNull: false,
                defaultValue: 'cash',
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'ApPurchaseDownPaymentInvoice',
            tableName: 'ap_purchase_down_payment_invoices',
        },
    );
    return ApPurchaseDownPaymentInvoice;
};
