'use strict';
const { Model, STRING } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class inspection_product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            inspection_product.belongsTo(models.MfReceiveProduct, {
                foreignKey: 'rp_id',
            });
            inspection_product.belongsTo(models.InItem, {
                foreignKey: 'item_id',
            });
        }
    }
    inspection_product.init(
        {
            rp_id: DataTypes.STRING,
            item_id: DataTypes.STRING,
            ip_entry_date: DataTypes.DATE,
            ip_qty: DataTypes.DOUBLE,
            ip_result: DataTypes.STRING,
            ip_qty_reject: DataTypes.DOUBLE,
            ip_approval: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'MfInspectionProduct',
            tableName: 'mf_inspection_products',
        },
    );
    return inspection_product;
};
