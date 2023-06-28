'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InSupplierItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InSupplierItem.belongsTo(models.InItem, {
        foreignKey: 'id_item',
      });
      InSupplierItem.belongsTo(models.InSupplier, {
        foreignKey: 'id_supplier',
      });
    }
  }
  InSupplierItem.init({
    id_item: DataTypes.STRING,
    id_supplier: DataTypes.STRING,
    price: DataTypes.FLOAT,
    delivery_time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'InSupplierItem',
    tableName: 'in_supplier_items',
  });
  return InSupplierItem;
};