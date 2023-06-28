'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlRecordExpenseDetail extends Model {
        static associate(models) {
            // define association here
            GlRecordExpenseDetail.belongsTo(models.GlCoa, {
                foreignKey: 'id_coa',
            }),
            GlRecordExpenseDetail.belongsTo(models.GlRecordExpense, {
                foreignKey: 'id_record_expense',
            });
        }
    }
    GlRecordExpenseDetail.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            value:{
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:0,
            },
            id_coa: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_record_expense: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'gl_record_expenses',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            modelName: 'GlRecordExpenseDetail',
            tableName: 'gl_record_expense_details',
        },
    );
    return GlRecordExpenseDetail;
};
