'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class mf_machine_usage extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            mf_machine_usage.belongsTo(models.MfProductionOrder, {
                foreignKey: 'po_id',
            });
            mf_machine_usage.belongsTo(models.mf_machine, {
                foreignKey: 'm_id',
            });
        }
    }
    mf_machine_usage.init(
        {
            po_id: DataTypes.STRING,
            m_id: DataTypes.STRING,
            mu_start: DataTypes.DATE,
            mu_end: DataTypes.DATE,
            mu_machine_usage: DataTypes.TIME,
        },
        {
            sequelize,
            modelName: 'MfMachineUsage',
            tableName: 'mf_machine_usages',
        },
    );
    return mf_machine_usage;
};
