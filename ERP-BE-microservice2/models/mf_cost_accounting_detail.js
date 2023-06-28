'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class mf_cost_accounting_detail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            mf_cost_accounting_detail.belongsTo(models.MfCostAccounting, {
                foreignKey: 'ca_id',
            });
            mf_cost_accounting_detail.belongsTo(models.MfJobOrderDetail, {
                foreignKey: 'jod_id',
            });
            mf_cost_accounting_detail.belongsTo(models.MfMasterOperation, {
                foreignKey: 'o_id',
            });
            mf_cost_accounting_detail.belongsTo(models.InItem, {
                foreignKey: 'item_id',
            });
            mf_cost_accounting_detail.belongsTo(models.mf_machine, {
                foreignKey: 'm_id',
            });
            mf_cost_accounting_detail.belongsTo(models.MfManSkill, {
                foreignKey: 'mn_skill_id',
            });
        }
    }
    mf_cost_accounting_detail.init(
        {
            ca_id: DataTypes.STRING,
            jod_id: DataTypes.STRING,
            o_id: DataTypes.STRING,
            item_id: DataTypes.STRING,
            qty_produced: DataTypes.DOUBLE,
            m_id: DataTypes.STRING,
            m_duration: DataTypes.TIME,
            mn_skill_id: DataTypes.STRING,
            mn_skill_qty: DataTypes.INTEGER,
            material_cost: DataTypes.DOUBLE,
            machine_cost: DataTypes.DOUBLE,
            man_cost: DataTypes.DOUBLE,
            total_cost: DataTypes.DOUBLE,
        },
        {
            sequelize,
            modelName: 'MfCostAccountingDetail',
            tableName: 'mf_cost_accounting_details',
        },
    );
    return mf_cost_accounting_detail;
};
