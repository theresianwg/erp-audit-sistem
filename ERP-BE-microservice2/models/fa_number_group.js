'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class number_group extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            number_group.belongsTo(models.fa_group, {
                foreignKey: 'id_group',
            });
            number_group.hasMany(models.fa_asset, {
                foreignKey: 'id_number_group',
            });
        }
    }
    number_group.init(
        {
            group_number: DataTypes.STRING,
            name: DataTypes.STRING,
            id_group: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'fa_number_group',
        },
    );
    return number_group;
};
