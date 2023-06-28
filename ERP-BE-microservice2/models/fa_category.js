'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class fa_category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            fa_category.hasMany(models.fa_asset, {
                foreignKey: 'id_category',
            });
        }
    }
    fa_category.init(
        {
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'fa_category',
        },
    );
    return fa_category;
};
