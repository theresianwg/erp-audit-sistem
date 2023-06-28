'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlJournal extends Model {
        static associate(models) {
            GlJournal.hasMany(models.GlJournalDetail, {
                foreignKey: 'id_journal',
            }),
            GlJournal.hasOne(models.GlRecordExpense, {
                foreignKey: 'id_journal',
            }),
            GlJournal.belongsTo(models.GlAccountingPeriod, {
                foreignKey: 'id_accounting_period',
            });
            GlJournal.belongsTo(models.MfWorkcentre, {
                foreignKey: 'wc_id',
            });
            GlJournal.belongsTo(models.GlNumbering, {
                foreignKey: 'id_numbering',
            });
        }
    }
    GlJournal.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            id_accounting_period: DataTypes.INTEGER,
            id_numbering: DataTypes.INTEGER,
            wc_id: DataTypes.STRING,
            Journal_Ref: DataTypes.STRING,
            Journal_Amount: DataTypes.INTEGER,
            Journal_Approval_Status: DataTypes.BOOLEAN,
            Journal_Code: DataTypes.STRING,
            Journal_Notes: DataTypes.STRING,
            Journal_Post_Date: DataTypes.DATEONLY,
            Journal_Post_Status: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'GlJournal',
            tableName: 'gl_journals',
        },
    );
    return GlJournal;
};
