'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class workcentre extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            workcentre.hasMany(models.mf_machine, {
                foreignKey: 'wc_id',
            });
            workcentre.hasMany(models.MfMasterOperation, {
                foreignKey: 'wc_id',
            });
            workcentre.hasMany(models.GlWipCost, {
                foreignKey: 'wc_id',
            });
            workcentre.hasMany(models.GlWipCostClosing, {
                foreignKey: 'wc_id',
            });
            workcentre.hasMany(models.GlWipqtyClosing, {
                foreignKey: 'wc_id',
            });
            workcentre.hasMany(models.GlCoa, {
                foreignKey: 'wc_id',
            });
            workcentre.hasMany(models.GlCashFlow, {
                foreignKey: 'wc_id',
            });
            workcentre.hasMany(models.GlJournal, {
                foreignKey: 'wc_id',
            });
            workcentre.hasMany(models.GlRecordExpense, {
                foreignKey: 'wc_id',
            });
        }
    }
    workcentre.init(
        {
            wc_name: DataTypes.STRING,
            wc_location: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'MfWorkcentre',
            tableName: 'mf_workcentres',
        },
    );
    return workcentre;
};
