'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InItemDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InItemDetail.belongsTo(models.InItem, { foreignKey: 'id_item' })
      InItemDetail.hasMany(models.InSaveStorage, { foreignKey: 'item_detail_id' })
    }
  }
  InItemDetail.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    id_item: DataTypes.STRING,
    buy_price: DataTypes.FLOAT,
    quantity: DataTypes.FLOAT,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'InItemDetail',
    tableName: 'in_item_details'
  });
  return InItemDetail;
};