'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ApPurchaseInvoice extends Model {
        static associate(models) {
            ApPurchaseInvoice.belongsTo(models.InPurchaseOrder, {
                foreignKey: 'purchase_order_id',
                onDelete: 'CASCADE',
                as: 'purchase_order',
            });
            ApPurchaseInvoice.belongsTo(models.CbCurrency, {
                foreignKey: 'currency_id',
                as: 'currency',
            });
            ApPurchaseInvoice.belongsTo(models.ApPurchaseDownPaymentInvoice, {
                foreignKey: 'purchase_down_payment_invoice_id',
                allowNull: true,
                as: 'purchase_down_payment_invoice',
            });
        }
    }
    ApPurchaseInvoice.init(
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
            purchase_down_payment_invoice_id: DataTypes.STRING,
            description: DataTypes.TEXT,
            taxes_included: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'ApPurchaseInvoice',
            tableName: 'ap_purchase_invoices',
        },
    );
    return ApPurchaseInvoice;
};
