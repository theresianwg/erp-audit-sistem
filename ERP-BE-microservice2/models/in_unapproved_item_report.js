'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InUnapprovedItemReport extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            InUnapprovedItemReport.belongsTo(models.InReceiveItem, {
                foreignKey: 'id_rci',
            });
        }
    }
    InUnapprovedItemReport.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            id_rci: DataTypes.STRING,
            id_item: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'InUnapprovedItemReport',
            tableName: 'in_unapproved_item_reports',
        },
    );
    return InUnapprovedItemReport;
};
