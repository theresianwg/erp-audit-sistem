'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class mf_job_order_detail extends Model {
        static associate(models) {
            // define association here
            mf_job_order_detail.belongsTo(models.MfJobOrder, {
                foreignKey: 'jo_id',
            });
            mf_job_order_detail.belongsTo(models.MfMasterOperation, {
                foreignKey: 'o_id',
            });
            mf_job_order_detail.belongsTo(models.InItem, {
                foreignKey: 'item_id',
            });
            mf_job_order_detail.belongsTo(models.mf_machine, {
                foreignKey: 'm_id',
            });
            mf_job_order_detail.belongsTo(models.MfManSkill, {
                foreignKey: 'jod_id_skill',
            });

            mf_job_order_detail.hasOne(models.MfRequestMan, {
                foreignKey: 'jod_id',
            });
            mf_job_order_detail.hasMany(models.MfCostAccountingDetail, {
                foreignKey: 'jod_id',
            });
        }
    }
    mf_job_order_detail.init(
        {
            jo_id: DataTypes.STRING,
            o_id: DataTypes.STRING,
            item_id: DataTypes.STRING,
            jod_qty: DataTypes.DOUBLE,
            m_id: DataTypes.STRING,
            jod_m_hour: DataTypes.TIME,
            jod_id_skill: DataTypes.STRING,
            jod_man_qty: DataTypes.DOUBLE,
        },
        {
            sequelize,
            modelName: 'MfJobOrderDetail',
            tableName: 'mf_job_order_details',
        },
    );
    return mf_job_order_detail;
};
