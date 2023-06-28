'use strict';
const { Model } = require('sequelize');
const {
    generateSuperAdminId,
} = require('../modules/main/app/utils/idGenerator');

module.exports = (sequelize, DataTypes) => {
    class SuperAdmin extends Model {
        static associate(models) {
            SuperAdmin.belongsTo(models.Role, {
                foreignKey: 'roleId',
                as: 'role',
            });
        }

        static async generateId() {
            const lastRole = await this.findOne({
                order: [['createdAt', 'DESC']],
            });

            const lastNumber = lastRole ? parseInt(lastRole.id.slice(3)) : 0;
            return generateSuperAdminId(lastNumber + 1);
        }
    }

    SuperAdmin.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },

            // Foreign Key
            roleId: {
                allowNull: false,
                type: DataTypes.STRING,
                references: {
                    model: 'main_roles',
                    key: 'id',
                },
            },

            // Auth
            username: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            resetToken: DataTypes.STRING,

            // ID
            fullname: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            gender: {
                type: DataTypes.ENUM('Perempuan', 'Laki-laki'),
            },
            description: {
                // deskripsi dari super admin, background/latar belakangnya, dll
                type: DataTypes.TEXT,
            },

            // Pas Foto
            imageUrl: DataTypes.STRING,

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
            modelName: 'SuperAdmin',
            tableName: 'main_super_admins',
        },
    );

    return SuperAdmin;
};
