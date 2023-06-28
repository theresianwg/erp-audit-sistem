const {TaTaxItem} = require('../../../../models');

class TaxItemRepository {
    async createTaxItem(data) {
        return await TaTaxItem.create(data);
    }

    async deleteTaxItem(taxid) {
        return await TaTaxItem.destroy({
        where: {
            taxid: taxid
        }
        });
    }

    async updateTaxItem(taxid, item_id) {
        return await TaTaxItem.update(data, {
        where: {
            taxid: taxid,
            item_id: item_id
        }
        });
    }

    async getAllTaxItem() {
        return await TaTaxItem.findAll({
            include: {
                model: TaTax,
                attributes: ['item_id', 'taxid']
            }
        });
    }


}

module.exports = new TaxItemRepository()