'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InTransferToInventory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            InTransferToInventory.hasMany(models.InTransferToInventoryDetail, {
                foreignKey: 'id_to',
            });
        }
    }
    InTransferToInventory.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            status: DataTypes.STRING,
            to_datetime: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'InTransferToInventory',
            tableName: 'in_transfer_to_inventories',
        },
    );
    return InTransferToInventory;
};
