'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class receive_product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            receive_product.belongsTo(models.MfProductionOrder, {
                foreignKey: 'po_id',
            });
            receive_product.belongsTo(models.InItem, {
                foreignKey: 'item_id',
            });
            receive_product.hasOne(models.MfInspectionProduct, {
                foreignKey: 'rp_id',
            });
        }
    }
    receive_product.init(
        {
            po_id: DataTypes.STRING,
            item_id: DataTypes.STRING,
            rp_qty: DataTypes.DOUBLE,
            rp_date: DataTypes.DATE,
            rp_approval: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'MfReceiveProduct',
            tableName: 'mf_receive_products',
        },
    );
    return receive_product;
};
