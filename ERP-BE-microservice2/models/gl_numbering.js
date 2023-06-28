'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlNumbering extends Model {
        static associate(models) {
            // define association here
            GlNumbering.belongsTo(models.GlTransactionType,{
                foreignKey: 'id_transaction_type'
            })
            GlNumbering.hasMany(models.GlJournal,{
                foreignKey: 'id_numbering'
            })
            GlNumbering.hasMany(models.GlRecordExpense,{
                foreignKey: 'id_numbering'
            })
        }
    }
    GlNumbering.init(
        {
            id_transaction_type: DataTypes.INTEGER,
            Numbering_Name: DataTypes.STRING,
            Numbering_Type: DataTypes.ENUM(
                'Tidak Reset', 
                'Reset Setiap Hari', 
                'Reset Setiap Bulan', 
                'Reset Setiap Tahun'
                ),
            Numbering_Digit_Counter: DataTypes.INTEGER,
            Numbering_Component:DataTypes.STRING,
            Numbering_Active:DataTypes.BOOLEAN
        },
        {
            sequelize,
            modelName: 'GlNumbering',
            tableName: 'gl_numberings',
        },
    );
    return GlNumbering;
};
