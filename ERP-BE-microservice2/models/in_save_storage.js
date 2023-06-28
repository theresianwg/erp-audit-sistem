'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InSaveStorage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        InSaveStorage.belongsTo(models.InItem, {
            foreignKey: 'item_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });
        InSaveStorage.belongsTo(models.InItemDetail, {
            foreignKey: 'item_detail_id',
        })
    }
  }
  InSaveStorage.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    item_id: DataTypes.STRING,
    item_detail_id: DataTypes.STRING,
    quantity: DataTypes.FLOAT,
    item_unit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'InSaveStorage',
    tableName: 'in_save_storages',
  });
  return InSaveStorage;
};