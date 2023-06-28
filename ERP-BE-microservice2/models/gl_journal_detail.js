'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlJournalDetail extends Model {
        static associate(models) {
            // define association here
            GlJournalDetail.belongsTo(models.GlCoa, {
                foreignKey: 'id_coa',
            }),
                GlJournalDetail.belongsTo(models.GlJournal, {
                    foreignKey: 'id_journal',
                });
        }
    }
    GlJournalDetail.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            id_coa: DataTypes.INTEGER,
            id_journal: DataTypes.INTEGER,
            JD_Credit: DataTypes.INTEGER,
            JD_Credit_Curr: DataTypes.INTEGER,
            JD_Debit: DataTypes.INTEGER,
            JD_Debit_Curr: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'GlJournalDetail',
            tableName: 'gl_journal_details',
        },
    );
    return GlJournalDetail;
};
