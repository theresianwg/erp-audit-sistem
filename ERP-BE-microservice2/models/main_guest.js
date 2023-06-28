'use strict';
const { Model } = require('sequelize');
const { generateGuestId } = require('../modules/main/app/utils/idGenerator');

module.exports = (sequelize, DataTypes) => {
    class Guest extends Model {
        static associate(models) {
            Guest.belongsTo(models.Role, {
                foreignKey: 'roleId',
                as: 'role',
            });
        }

        static async generateId() {
            const lastRole = await this.findOne({
                order: [['createdAt', 'DESC']],
            });

            const lastNumber = lastRole ? parseInt(lastRole.id.slice(3)) : 0;
            return generateGuestId(lastNumber + 1);
        }
    }

    Guest.init(
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
            occupation: {
                // job
                allowNull: false,
                type: DataTypes.STRING,
            },
            instance: {
                // instansi = asal perusahaan
                allowNull: false,
                type: DataTypes.STRING,
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
            modelName: 'Guest',
            tableName: 'main_guests',
        },
    );

    return Guest;
};
