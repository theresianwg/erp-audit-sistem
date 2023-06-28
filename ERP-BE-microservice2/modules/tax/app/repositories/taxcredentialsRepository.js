const {TaTaxCredentials} = require('../../../../models');

class TaTaxCredentialsRepository {
    async createTaxCredentials(data) {
        return await TaTaxCredentials.create(data);
    }

    async deleteTaxCredentials(id) {
        return await TaTaxCredentials.destroy({
        where: {
            id: id
        }
        });
    }

    async updateTaxCredentials(id, data) {
        return await TaTaxCredentials.update(data, {
        where: {
            id: id
        }
        });
    }

    async getAllTaxCredentials() {
        return await TaTaxCredentials.findAll({
            include: {
                model: TaTaxCredentials,
                attributes: ['id', 'tgl_pengukuhan_ptkp', 'no_pengukuhan_ptkp', 'NPWP', 'KLU', 'companyId']
            }
        });
    }


}

module.exports = new TaTaxCredentialsRepository()