'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InCustomer extends Model {
        static associate(models) {
            // define association here
        }
    }
    InCustomer.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'InCustomer',
            tableName: 'in_customers',
        },
    );
    return InCustomer;
};
