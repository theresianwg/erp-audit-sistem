'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class fa_asset extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            fa_asset.belongsTo(models.fa_fiscal_type, {
                foreignKey: 'id_fiscal_type',
            });
            fa_asset.belongsTo(models.fa_category, {
                foreignKey: 'id_category',
            });
            fa_asset.belongsTo(models.fa_group, {
                foreignKey: 'id_group',
            });
            fa_asset.belongsTo(models.fa_number_group, {
                foreignKey: 'id_number_group',
            });
            fa_asset.hasOne(models.fa_asset_disposal, {
                foreignKey: 'id_asset',
            });
            fa_asset.hasOne(models.fa_asset_revaluation, {
                foreignKey: 'id_asset',
            });
            fa_asset.hasOne(models.fa_asset_stock_take, {
                foreignKey: 'id_asset',
            });
            fa_asset.hasOne(models.fa_asset_transfer, {
                foreignKey: 'id_asset',
            });
            fa_asset.hasOne(models.fa_asset_maintenance, {
                foreignKey: 'id_asset',
            });
            fa_asset.hasMany(models.fa_asset_depreciation, {
                foreignKey: 'id_asset',
            });
            fa_asset.hasOne(models.mf_machine, {
                foreignKey: 'id_asset',
            });
            fa_asset.hasOne(models.MfMachine, {
                foreignKey: 'id_asset',
            });
        }
    }
    fa_asset.init(
        {
            name: DataTypes.STRING,
            id_category: DataTypes.STRING,
            id_supplier: DataTypes.STRING,
            asset_code: DataTypes.STRING,
            asset_type: DataTypes.STRING,
            address: DataTypes.STRING,
            department: DataTypes.STRING,
            age_of_asset: DataTypes.INTEGER,
            purchase_date: DataTypes.DATE,
            price: DataTypes.INTEGER,
            asset_account: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            residual_value: DataTypes.INTEGER,
            description: DataTypes.TEXT,
            id_fiscal_type: DataTypes.STRING,
            status: DataTypes.STRING,
            status_asset: DataTypes.STRING,
            id_group: DataTypes.INTEGER,
            id_number_group: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'fa_asset',
        },
    );
    return fa_asset;
};
