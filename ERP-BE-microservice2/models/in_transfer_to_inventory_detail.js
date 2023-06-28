'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InTransferToInventoryDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            InTransferToInventoryDetail.belongsTo(
                models.InTransferToInventory,
                {
                    foreignKey: 'id_to',
                },
            );
            InTransferToInventoryDetail.belongsTo(models.InItem, {
                foreignKey: 'id_item',
            });
        }
    }
    InTransferToInventoryDetail.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            id_to: DataTypes.STRING,
            id_item: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'InTransferToInventoryDetail',
            tableName: 'in_transfer_to_inventory_details',
        },
    );
    return InTransferToInventoryDetail;
};
