'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlWipTransfer extends Model {
        static associate(models) {}
    }
    GlWipTransfer.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            WTransfer_Cost: DataTypes.FLOAT,
            WTransfer_PoNumberCredit: DataTypes.STRING,
            WTransfer_PoNumberDebit: DataTypes.STRING,
            WTransfer_qty: DataTypes.INTEGER,
            WTransfer_Date: DataTypes.DATE,
            WTransfer_WorkCenterCredit: DataTypes.STRING,
            WTransfer_WorkCenterDebit: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'GlWipTransfer',
            tableName: 'gl_wip_transfers',
        },
    );
    return GlWipTransfer;
};
