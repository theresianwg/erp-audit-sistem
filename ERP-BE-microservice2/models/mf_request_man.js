'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class mf_request_man extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            mf_request_man.belongsTo(models.MfJobOrderDetail, {
                foreignKey: 'jod_id',
            });
            mf_request_man.belongsTo(models.MfManSkill, {
                foreignKey: 'mn_skill_id',
            });
        }
    }
    mf_request_man.init(
        {
            jod_id: DataTypes.STRING,
            mn_skill_id: DataTypes.STRING,
            mn_skill_qty: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'MfRequestMan',
            tableName: 'mf_request_mans',
        },
    );
    return mf_request_man;
};
