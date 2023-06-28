'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InItem extends Model {
        static associate(models) {
            // define association here
            InItem.hasOne(models.InInventory, {
                foreignKey: 'item_id',
            });
            InItem.hasOne(models.InBomParent, {
                foreignKey: 'id_parent_item',
            });
            InItem.hasMany(models.InBomChild, {
                foreignKey: 'id_child_item',
            });
            InItem.hasMany(models.InSalesOrderDetail, {
                foreignKey: 'id_item',
            });
            InItem.hasMany(models.InPurchaseRequestDetail, {
                foreignKey: 'id_item',
            });
            InItem.hasMany(models.InPurchaseOrderDetail, {
                foreignKey: 'id_item',
                sourceKey: 'id',
            });
            InItem.hasMany(models.MfProductionRequest, {
                foreignKey: 'item_id',
            });
            InItem.hasMany(models.MfProductionOrder, {
                foreignKey: 'item_id',
            });
            InItem.hasMany(models.MfReceiveProduct, {
                foreignKey: 'item_id',
            });
            InItem.hasMany(models.MfJobOrderDetail, {
                foreignKey: 'item_id',
            });
            InItem.hasMany(models.MfMasterOperation, {
                foreignKey: 'item_id',
            });
            InItem.hasMany(models.MfMasterRouting, {
                foreignKey: 'item_id',
            });
            InItem.belongsTo(models.GlCoa, {
                foreignKey: 'id_coa',
            });
            InItem.belongsTo(models.GlItemCategory, {
                foreignKey: 'id_category',
            });
            InItem.belongsTo(models.MfInspectionProduct, {
                foreignKey: 'item_id',
            });
            InItem.belongsTo(models.InReceiveItemCheck, {
                foreignKey: 'id_item',
            });
            InItem.hasMany(models.TaTaxItem, {
                foreignKey: 'item_id',
            });
            InItem.hasMany(models.MfCostAccounting, {
                foreignKey: 'item_id',
            });
            InItem.hasMany(models.MfCostAccountingDetail, {
                foreignKey: 'item_id',
            });
            InItem.hasMany(models.InSaveStorage, {
                foreignKey: 'item_id',
            });
            InItem.hasMany(models.InDelayedProductionRequest, {
                foreignKey: 'item_id',
            });
            InItem.hasMany(models.InSupplierItem, {
                foreignKey: 'id_item',
            })
            InItem.hasMany(models.InItemDetail, {
                foreignKey: 'id_item',
            })
        }
    }
    InItem.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            name: DataTypes.STRING,
            id_category: DataTypes.INTEGER,
            id_coa: DataTypes.INTEGER,
            id_tax: DataTypes.INTEGER,
            sale_price: DataTypes.FLOAT,
            sale_unit: DataTypes.STRING,
            buy_price: DataTypes.FLOAT,
            buy_unit: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'InItem',
            tableName: 'in_items',
        },
    );
    return InItem;
};
