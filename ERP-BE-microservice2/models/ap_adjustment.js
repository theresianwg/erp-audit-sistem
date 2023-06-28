'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ApAdjustment extends Model {
        static associate(models) {
            ApAdjustment.belongsTo(models.ApPurchaseInvoice, {
                foreignKey: 'related_invoice_id',
                allowNull: true,
            });
        }
    }
    ApAdjustment.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING,
            },
            adjustment_type: {
                type: DataTypes.ENUM('credit', 'debit', 'other'),
                allowNull: false,
            },
            adjustment_date: DataTypes.DATEONLY,
            adjustment_reason: DataTypes.TEXT,
            approval_date: DataTypes.DATE,
            adjustment_document: DataTypes.STRING,
            approval_status: {
                type: DataTypes.ENUM('pending', 'approved', 'rejected'),
                allowNull: false,
                defaultValue: 'pending',
            },
            related_invoice_id: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'ApAdjustment',
            tableName: 'ap_adjustments',
        },
    );
    return ApAdjustment;
};
