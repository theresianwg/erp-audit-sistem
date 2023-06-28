'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class fa_asset_transfer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            fa_asset_transfer.belongsTo(models.fa_asset, {
                foreignKey: 'id_asset',
            });
        }
    }
    fa_asset_transfer.init(
        {
            id_asset: DataTypes.STRING,
            name: DataTypes.STRING,
            new_address: DataTypes.STRING,
            old_address: DataTypes.STRING,
            new_department: DataTypes.STRING,
            old_department: DataTypes.STRING,
            transfer_method: DataTypes.STRING,
            transfer_date: DataTypes.DATE,
            cost: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            description: DataTypes.TEXT,
            status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'fa_asset_transfer',
        },
    );
    return fa_asset_transfer;
};
