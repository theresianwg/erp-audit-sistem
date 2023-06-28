'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class production_request extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            production_request.hasOne(models.MfProductionOrder, {
                foreignKey: 'pr_id',
            });
            production_request.belongsTo(models.InItem, {
                foreignKey: 'item_id',
            });
            production_request.belongsTo(models.InSalesOrder, {
                foreignKey: 'so_id',
            });
        }
    }
    production_request.init(
        {
            item_id: DataTypes.STRING,
            pr_start: DataTypes.DATE,
            pr_end: DataTypes.DATE,
            pr_qty: DataTypes.DOUBLE,
            pr_status: DataTypes.STRING,
            so_id: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'MfProductionRequest',
            tableName: 'mf_production_requests',
        },
    );
    return production_request;
};
