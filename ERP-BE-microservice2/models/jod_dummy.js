'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class jod_dummy extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    jod_dummy.init(
        {
            id_jo: DataTypes.INTEGER,
            operation_name: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            id_mesin: DataTypes.INTEGER,
            duration: DataTypes.INTEGER,
            man_skill: DataTypes.STRING,
            man_qty: DataTypes.INTEGER,
            status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'jod_dummy',
        },
    );
    return jod_dummy;
};
