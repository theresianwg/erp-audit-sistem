'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlJournalSource extends Model {
        static associate(models) {
            GlJournalSource.hasMany(models.GlTransactionType, {
                foreignKey: 'id_journal_source',
            });
        }
    }
    GlJournalSource.init(
        {
            JS_Modul: DataTypes.STRING,
            JS_Description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'GlJournalSource',
            tableName: 'gl_journal_sources',
        },
    );
    return GlJournalSource;
};
