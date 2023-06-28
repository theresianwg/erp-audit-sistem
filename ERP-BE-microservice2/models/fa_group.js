'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class group extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            group.hasMany(models.fa_number_group, {
                foreignKey: 'id_group',
            });
            group.hasMany(models.fa_asset, {
                foreignKey: 'id_group',
            });
        }
    }
    group.init(
        {
            class_number: DataTypes.STRING,
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'fa_group',
        },
    );
    return group;
};
