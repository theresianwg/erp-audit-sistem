'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class fa_asset_stock_take extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            fa_asset_stock_take.belongsTo(models.fa_asset, {
                foreignKey: 'id_asset',
            });
        }
    }
    fa_asset_stock_take.init(
        {
            id_asset: DataTypes.STRING,
            name: DataTypes.STRING,
            stock_take_date: DataTypes.DATE,
            condition: DataTypes.STRING,
            description: DataTypes.TEXT,
            status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'fa_asset_stock_take',
        },
    );
    return fa_asset_stock_take;
};
