'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InDelayedProductionRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InDelayedProductionRequest.belongsTo(models.InItem, {
        foreignKey: 'item_id'
      });
    }
  }
  InDelayedProductionRequest.init({
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    item_id: DataTypes.STRING,
    quantity: DataTypes.FLOAT,
    status: DataTypes.ENUM('waiting', 'done')
  }, {
    sequelize,
    modelName: 'InDelayedProductionRequest',
    tableName: 'in_delayed_production_requests',
  });
  return InDelayedProductionRequest;
};