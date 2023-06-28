'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class RolePermission extends Model {}

    RolePermission.init(
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            roleId: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'main_roles',
                    key: 'id',
                },
            },
            permissionId: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'main_permissions',
                    key: 'id',
                },
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
            modelName: 'RolePermission',
            tableName: 'main_roles_permissions',
        },
    );

    return RolePermission;
};
