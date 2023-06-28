'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlBudgetControl extends Model {
        static associate(models) {
            GlBudgetControl.belongsTo(models.GlAccountingPeriod, {
                foreignKey: 'id_accounting_period',
            }),
                GlBudgetControl.belongsTo(models.GlCoa, {
                    foreignKey: 'id_coa',
                });
        }
    }
    GlBudgetControl.init(
        {
            id_accounting_period: DataTypes.INTEGER,
            id_coa: DataTypes.INTEGER,
            BC_Amount: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'GlBudgetControl',
            tableName: 'gl_budget_controls',
        },
    );
    return GlBudgetControl;
};
