'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class fa_asset_disposal extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            fa_asset_disposal.belongsTo(models.fa_asset, {
                foreignKey: 'id_asset',
            });
        }
    }
    fa_asset_disposal.init(
        {
            id_asset: DataTypes.STRING,
            name: DataTypes.STRING,
            disposal_reason: DataTypes.STRING,
            disposal_date: DataTypes.DATE,
            description: DataTypes.TEXT,
            status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'fa_asset_disposal',
        },
    );
    return fa_asset_disposal;
};
