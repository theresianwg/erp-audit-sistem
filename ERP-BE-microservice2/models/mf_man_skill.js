'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class mf_man_skill extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            mf_man_skill.hasMany(models.MfMan, {
                foreignKey: 'mn_id_skill',
            });
            mf_man_skill.hasMany(models.MfJobOrderDetail, {
                foreignKey: 'jod_id_skill',
            });
            mf_man_skill.hasMany(models.MfRequestMan, {
                foreignKey: 'mn_skill_id',
            });
            mf_man_skill.hasMany(models.MfMasterOperation, {
                foreignKey: 'mn_skill_id',
            });
            mf_man_skill.hasMany(models.MfCostAccountingDetail, {
                foreignKey: 'mn_skill_id',
            });
        }
    }
    mf_man_skill.init(
        {
            ms_skill: DataTypes.STRING,
            ms_skill_sallary: DataTypes.INTEGER,
            ms_skill_wroking_hour: DataTypes.TIME,
            ms_skill_costph: DataTypes.DOUBLE,
        },
        {
            sequelize,
            modelName: 'MfManSkill',
            tableName: 'mf_man_skills',
        },
    );
    return mf_man_skill;
};
