'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class mf_man extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            mf_man.belongsTo(models.MfManSkill, {
                foreignKey: 'mn_skill',
            });
        }
    }
    mf_man.init(
        {
            mn_name: DataTypes.STRING,
            mn_id_skill: DataTypes.STRING,
            mn_costph: DataTypes.DOUBLE,
        },
        {
            sequelize,
            modelName: 'MfMan',
            tableName: 'mf_mans',
        },
    );
    return mf_man;
};
