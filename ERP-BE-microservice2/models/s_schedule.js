'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class s_schedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    s_schedule.init(
        {
            jod_id: DataTypes.INTEGER,
            start_date: DataTypes.DATE,
            end_date: DataTypes.DATE,
            end_time: DataTypes.TIME,
            start_time: DataTypes.TIME,
        },
        {
            sequelize,
            modelName: 's_schedule',
        },
    );
    return s_schedule;
};
