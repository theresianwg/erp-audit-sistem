'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fa_asset_maintenance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      fa_asset_maintenance.belongsTo(models.fa_asset, { foreignKey: "id_asset" });

    }
  }
  fa_asset_maintenance.init({
    id_asset: DataTypes.STRING,
    name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    finish_date: DataTypes.DATE,
    maintenance_type: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fa_asset_maintenance',
  });
  return fa_asset_maintenance;
};