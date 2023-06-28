'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InReceiveItem extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            InReceiveItem.hasMany(models.InReceiveItemCheck, {
                foreignKey: 'id_received_item',
            });
            InReceiveItem.belongsTo(models.InPurchaseOrder, {
                foreignKey: 'id_action',
            });
            InReceiveItem.hasMany(models.InTransferToInventoryDetail, {
                foreignKey: 'id_rci',
            });
        }
    }
    InReceiveItem.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            id_action: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'InReceiveItem',
            tableName: 'in_receive_items',
        },
    );
    return InReceiveItem;
};
