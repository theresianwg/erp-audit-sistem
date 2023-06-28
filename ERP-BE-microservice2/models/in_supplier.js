'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InSupplier extends Model {
        static associate(models) {
            // define association here
            InSupplier.hasMany(models.InPurchaseOrder, {
                foreignKey: 'id_supplier',
            });
            InSupplier.hasMany(models.InSupplierItem, {
                foreignKey: 'id_supplier'
            });
        }
    }
    InSupplier.init(
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
            modelName: 'InSupplier',
            tableName: 'in_suppliers',
        },
    );
    return InSupplier;
};
