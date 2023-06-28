'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class fa_asset_revaluation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            fa_asset_revaluation.belongsTo(models.fa_asset, {
                foreignKey: 'id_asset',
            });
        }
    }
    fa_asset_revaluation.init(
        {
            id_asset: DataTypes.STRING,
            name: DataTypes.STRING,
            revaluation_amount: DataTypes.FLOAT,
            revaluation_date: DataTypes.DATE,
            age_of_asset: DataTypes.INTEGER,
            description: DataTypes.TEXT,
            status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'fa_asset_revaluation',
        },
    );
    return fa_asset_revaluation;
};
