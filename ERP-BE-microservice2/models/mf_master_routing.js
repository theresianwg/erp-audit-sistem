'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class mf_master_routing extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            mf_master_routing.belongsTo(models.InItem, {
                foreignKey: 'item_id',
            });
            mf_master_routing.belongsTo(models.MfMasterOperation, {
                foreignKey: 'o_id',
            });
        }
    }
    mf_master_routing.init(
        {
            mr_name: DataTypes.STRING,
            item_id: DataTypes.STRING,
            o_id: DataTypes.STRING,
            mr_order: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'MfMasterRouting',
            tableName: 'mf_master_routings',
        },
    );
    return mf_master_routing;
};
