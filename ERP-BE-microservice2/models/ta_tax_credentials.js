'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class TaTaxCredentials extends Model {
        static associate(models) {
            TaTaxCredentials.belongsTo(models.Company, {
                foreignKey: 'companyId',
                as: 'company',
            });

            TaTaxCredentials.hasMany(models.TaTax, {
                foreignKey: 'taxcredentialsid',
                as: 'tatax',
            });
        }
    }
    TaTaxCredentials.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },

            tgl_pengukuhan_ptkp: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },

            no_pengukuhan_ptkp: DataTypes.STRING,

            NPWP: DataTypes.STRING,

            KLU: DataTypes.STRING,

            companyId: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'company',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            modelName: 'TaTaxCredentials',
            tableName: 'ta_tax_credentials',
        },
    );
    return TaTaxCredentials;
};
