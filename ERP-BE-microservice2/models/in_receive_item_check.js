'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InReceiveItemCheck extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            InReceiveItemCheck.belongsTo(models.InReceiveItem, {
                foreignKey: 'id_received_item',
            });
            InReceiveItemCheck.belongsTo(models.InItem, {
                foreignKey: 'id_item',
            });
        }
    }
    InReceiveItemCheck.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            id_received_item: DataTypes.STRING,
            id_item: DataTypes.STRING,
            approved_quantity: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'InReceiveItemCheck',
            tableName: 'in_receive_item_checks',
        },
    );
    return InReceiveItemCheck;
};
