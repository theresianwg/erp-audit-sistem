'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlRecordExpense extends Model {
        static associate(models) {
            GlRecordExpense.hasMany(models.GlRecordExpenseDetail, {
                foreignKey: 'id_record_expense',
            }),
            GlRecordExpense.belongsTo(models.GlAccountingPeriod, {
                foreignKey: 'id_accounting_period',
            });
            GlRecordExpense.belongsTo(models.MfWorkcentre, {
                foreignKey: 'wc_id',
            });
            GlRecordExpense.belongsTo(models.GlNumbering, {
                foreignKey: 'id_numbering',
            });
            GlRecordExpense.belongsTo(models.GlJournal, {
                foreignKey: 'id_journal',
            });
        }
    }
    GlRecordExpense.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            RE_Code: {
                //ngelink ke id_numbering
                type: DataTypes.STRING,
                allowNull: false,
            },
            RE_Post_Date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            RE_Due_Date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            RE_Total: {
                type: DataTypes.INTEGER,
            },
            RE_Paid: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            RE_Notes:{
                type: DataTypes.TEXT,
            },
            RE_Status: {
                type: DataTypes.ENUM('Sedang diproses', 'Lunas'),
                allowNull: false,
                defaultValue: 'Sedang diproses',
            },
            id_journal:{
                type :DataTypes.INTEGER, //nanti pas pembuatan record expense sekalian sama jurnalnya
                allowNull: false,
            },
            id_accounting_period: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'gl_accounting_periods',
                    key: 'id',
                },
            },
            id_numbering:{
                type :DataTypes.INTEGER,
                allowNull: false,
            },
            wc_id: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: 'WC4111',
            },
        },
        {
            sequelize,
            modelName: 'GlRecordExpense',
            tableName: 'gl_record_expenses',
        },
    );
    return GlRecordExpense;
};
