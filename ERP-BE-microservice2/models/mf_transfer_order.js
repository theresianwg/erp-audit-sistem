'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class transfer_order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            transfer_order.belongsTo(models.InItem, {
                foreignKey: 'item_id',
            });
            transfer_order.belongsTo(models.MfProductionOrder, {
                foreignKey: 'po_id',
            });
        }
    }
    transfer_order.init(
        {
            po_id: DataTypes.STRING,
            item_id: DataTypes.STRING,
            req_qty: DataTypes.DOUBLE,
            to_status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'MfTransferOrder',
            tableName: 'mf_transfer_orders',
        },
    );
    return transfer_order;
};
