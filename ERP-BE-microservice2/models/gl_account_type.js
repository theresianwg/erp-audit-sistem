'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GlAccountType extends Model {
        static associate(models) {
            GlAccountType.hasMany(models.GlCoa, {
                foreignKey: 'id_account_type',
            }),
                GlAccountType.hasMany(models.GlCoaGroup, {
                    foreignKey: 'id_account_type',
                });
        }
    }
    GlAccountType.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            AT_Name: DataTypes.STRING,
            AT_Code: DataTypes.STRING,
            AT_Can_Remove: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'GlAccountType',
            tableName: 'gl_account_types',
        },
    );
    return GlAccountType;
};
