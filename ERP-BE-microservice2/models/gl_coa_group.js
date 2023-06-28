'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlCoaGroup extends Model {
        static associate(models) {
            // define association here
            GlCoaGroup.hasMany(models.GlCoa, {
                foreignKey: 'id_coa_group',
            }),
            GlCoaGroup.hasMany(models.GlWipCost, {
                foreignKey: 'id_coa_group',
            }),
            GlCoaGroup.belongsTo(models.GlAccountType, {
                foreignKey: 'id_account_type',
            })
        }
    }
    GlCoaGroup.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            id_account_type: DataTypes.INTEGER,
            CG_Name: DataTypes.STRING,
            CG_Calc: DataTypes.STRING,
            CG_Code: DataTypes.INTEGER,
            CG_Description: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'GlCoaGroup',
            tableName: 'gl_coa_groups',
        },
    );
    return GlCoaGroup;
};
