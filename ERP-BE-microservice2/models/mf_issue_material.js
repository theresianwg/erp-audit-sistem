'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class IssueMaterial extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            IssueMaterial.belongsTo(models.MfProductionOrder, {
                foreignKey: 'po_id',
            });
            IssueMaterial.belongsTo(models.InItem, {
                foreignKey: 'item_id',
            });
        }
    }
    IssueMaterial.init(
        {
            po_id: DataTypes.STRING,
            item_id: DataTypes.STRING,
            im_qty: DataTypes.DOUBLE,
            im_approval: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'MfIssueMaterial',
            tableName: 'mf_issue_materials',
        },
    );
    return IssueMaterial;
};
