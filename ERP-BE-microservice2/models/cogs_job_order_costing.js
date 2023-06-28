'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class JobOrderCosting extends Model {
        static associate(models) {
            JobOrderCosting.belongsTo(models.MfJobOrder, {
                foreignKey: 'jo_id',
                as: 'job_order',
            });
        }
    }

    JobOrderCosting.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            jo_id: {
                allowNull: false,
                type: DataTypes.STRING
            },
            material_cost: {
                type: DataTypes.INTEGER
            },
            machine_cost: {
                type: DataTypes.INTEGER
            },
            man_cost: {
                type: DataTypes.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: 'JobOrderCosting',
            tableName: 'cogs_job_order_costing',
        },
    );

    return JobOrderCosting;
};
