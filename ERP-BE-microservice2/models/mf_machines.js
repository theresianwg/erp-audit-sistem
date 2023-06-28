'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Machine extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Machine.belongsTo(models.MfWorkcentre, {
                foreignKey: 'wc_id',
            });
            Machine.hasMany(models.MfJobOrderDetail, {
                foreignKey: 'm_id',
            });
            Machine.hasMany(models.MfMachineUsage, {
                foreignKey: 'm_id',
            });
            Machine.belongsTo(models.fa_asset, {
                foreignKey: 'id_asset',
            });
        }
    }
    Machine.init(
        {
            id_asset: DataTypes.INTEGER,
            m_desc: DataTypes.STRING,
            m_costph: DataTypes.DOUBLE,
            m_status: DataTypes.STRING,
            wc_id: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'mf_machine',
            tableName: 'mf_machines',
        },
    );
    return Machine;
};
