'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class mf_job_order extends Model {
        static associate(models) {
            // define association here
            mf_job_order.belongsTo(models.MfProductionOrder, {
                foreignKey: 'po_id',
            });
            mf_job_order.hasMany(models.MfJobOrderDetail, {
                foreignKey: 'jo_id',
            });
            mf_job_order.hasOne(models.JobOrderCosting, {
                foreignKey: 'jo_id',
                as: 'job_order_costings'
            })
        }
    }
    mf_job_order.init(
        {
            po_id: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'MfJobOrder',
            tableName: 'mf_job_orders',
        },
    );
    return mf_job_order;
};
