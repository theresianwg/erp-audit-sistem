'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlTransactionType extends Model {
        static associate(models) {
            // define association here
            GlTransactionType.hasMany(models.GlCoa, {
                foreignKey: 'id_transaction_type',
            }),
            GlTransactionType.hasMany(models.GlNumbering, {
                foreignKey: 'id_transaction_type',
            })
            GlTransactionType.belongsTo(models.GlJournalSource,{
                foreignKey: 'id_journal_source',
            })
        }
    }
    GlTransactionType.init(
        {
            id_journal_source: DataTypes.INTEGER,
            TT_Name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'GlTransactionType',
            tableName: 'gl_transaction_types',
        },
    );
    return GlTransactionType;
};
