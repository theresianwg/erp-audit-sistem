const {TaTax} = require('../../../../models');

class TaxRepository {
    async createTax(data) {
        return await TaTax.create(data);
    }

    async deleteTax(id) {
        return await TaTax.destroy({
        where: {
            id: id
        }
        });
    }

    async updateTax(id, data) {
        return await TaTax.update(data, {
        where: {
            id: id
        }
        });
    }

    async getAllTax() {
        return await TaTax.findAll({
            include: {
                model: TaTax,
                attributes: ['id', 'tax_name', 'percentage']
            }
        });
    }


}

module.exports = new TaxRepository()