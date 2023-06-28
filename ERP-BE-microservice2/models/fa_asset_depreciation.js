'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class fa_asset_depreciation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            fa_asset_depreciation.belongsTo(models.fa_asset, {
                foreignKey: 'id_asset',
            });
        }
    }
    fa_asset_depreciation.init(
        {
            id_asset: DataTypes.STRING,
            year: DataTypes.INTEGER,
            annual_depreciation: DataTypes.FLOAT,
            monthly_depreciation: DataTypes.FLOAT,
            accumulated_depreciation: DataTypes.FLOAT,
            book_value: DataTypes.FLOAT,
        },
        {
            sequelize,
            modelName: 'fa_asset_depreciation',
        },
    );
    return fa_asset_depreciation;
};
