'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InTransferToCustomer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            InTransferToCustomer.belongsTo(models.InSalesOrder, {
                foreignKey: 'id_so',
            });
        }
    }
    InTransferToCustomer.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            id_so: DataTypes.STRING,
            toc_datetime: DataTypes.DATE,
            status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'InTransferToCustomer',
            tableName: 'in_transfer_to_customers',
        },
    );
    return InTransferToCustomer;
};
