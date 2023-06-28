'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class fa_fiscal_type extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            fa_fiscal_type.hasOne(models.fa_asset, {
                foreignKey: 'id_fiscal_type',
            });
        }
    }
    fa_fiscal_type.init(
        {
            name: DataTypes.STRING,
            estimated_life: DataTypes.INTEGER,
            depreciation_method: DataTypes.STRING,
            depreciation_rate: DataTypes.FLOAT,
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'fa_fiscal_type',
        },
    );
    return fa_fiscal_type;
};
