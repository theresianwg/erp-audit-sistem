'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ApPurchaseReturnInvoice extends Model {
        static associate(models) {
            ApPurchaseReturnInvoice.belongsTo(models.ApPurchaseInvoice, {
                foreignKey: 'purchase_invoice_id',
                onDelete: 'CASCADE',
            });
        }
    }
    ApPurchaseReturnInvoice.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING,
            },
            return_invoice_number: DataTypes.STRING,
            return_invoice_date: DataTypes.DATEONLY,
            total_credit_amount: DataTypes.DECIMAL(15, 2),
            return_reason: DataTypes.TEXT,
            received_date: DataTypes.DATE,
            purchase_invoice_id: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'ApPurchaseReturnInvoice',
            tableName: 'ap_purchase_return_invoices',
        },
    );
    return ApPurchaseReturnInvoice;
};
