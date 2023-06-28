'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class master_operation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            master_operation.belongsTo(models.MfWorkcentre, {
                foreignKey: 'wc_id',
            });
            master_operation.hasMany(models.MfJobOrderDetail, {
                foreignKey: 'o_id',
            });
            master_operation.belongsTo(models.InItem, {
                foreignKey: 'item_id',
            });
            master_operation.hasMany(models.MfMasterRouting, {
                foreignKey: 'o_id',
            });
            master_operation.hasMany(models.MfCostAccountingDetail, {
                foreignKey: 'o_id',
            });
            master_operation.belongsTo(models.mf_machine, {
                foreignKey: 'm_id',
            });
            master_operation.belongsTo(models.MfManSkill, {
                foreignKey: 'mn_skill_id',
            });
        }
    }
    master_operation.init(
        {
            o_name: DataTypes.STRING,
            o_desc: DataTypes.STRING,
            item_id: DataTypes.STRING,
            item_max: DataTypes.DOUBLE,
            wc_id: DataTypes.STRING,
            m_id: DataTypes.STRING,
            m_hour: DataTypes.TIME,
            mn_skill_id: DataTypes.STRING,
            mn_skill_qty: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'MfMasterOperation',
            tableName: 'mf_master_operations',
        },
    );
    return master_operation;
};
