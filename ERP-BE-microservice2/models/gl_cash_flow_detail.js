'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlCashFlowDetail extends Model {
        static associate(models) {
            GlCashFlowDetail.belongsTo(models.GlCashFlow, {
                foreignKey: 'id_cash_flow',
            });
        }
    }
    GlCashFlowDetail.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            id_cash_flow: DataTypes.INTEGER,
            CF_Name_Activity: DataTypes.STRING,
            CF_Type: DataTypes.STRING,
            CF_Amount: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'GlCashFlowDetail',
            tableName: 'gl_cash_flow_details',
        },
    );
    return GlCashFlowDetail;
};
