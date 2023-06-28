'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class mf_cost_accounting extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            mf_cost_accounting.belongsTo(models.MfProductionOrder, {
                foreignKey: 'po_id',
            });
            mf_cost_accounting.belongsTo(models.InItem, {
                foreignKey: 'item_id',
            });
            mf_cost_accounting.hasMany(models.MfCostAccountingDetail, {
                foreignKey: 'ca_id',
            });
        }
    }
    mf_cost_accounting.init(
        {
            po_id: DataTypes.STRING,
            item_id: DataTypes.STRING,
            item_total: DataTypes.DOUBLE,
            total_cost: DataTypes.DOUBLE,
            total_cost_each: DataTypes.DOUBLE,
        },
        {
            sequelize,
            modelName: 'MfCostAccounting',
            tableName: 'mf_cost_accountings',
        },
    );
    return mf_cost_accounting;
};
