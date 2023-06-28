'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlWipqtyClosing extends Model {
        static associate(models) {
            GlWipqtyClosing.belongsTo(models.GlAccountingPeriod, {
                foreignKey: 'id_accounting_period',
            });
            GlWipqtyClosing.belongsTo(models.MfProductionOrder, {
                foreignKey: 'po_id',
            });
            GlWipqtyClosing.belongsTo(models.MfWorkcentre, {
                foreignKey: 'wc_id',
            });
        }
    }
    GlWipqtyClosing.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            id_accounting_period: DataTypes.INTEGER,
            po_id: DataTypes.STRING,
            wc_id: DataTypes.STRING,
            Wpqty_unitqty: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'GlWipqtyClosing',
            tableName: 'gl_wipqty_closings',
        },
    );
    return GlWipqtyClosing;
};
