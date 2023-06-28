'use strict';

const { Op } = require('sequelize');
const { ABCPerItem } = require('../../../../models');

class ABCPerItemRepository {
    async getAllABCPerItems() {
        return await ABCPerItem.findAll();
    }

    async getABCPerItemById(id) {
        return await ABCPerItem.findByPk(id);
    }

    async createABCPerItem(data) {
        return await ABCPerItem.create(data);
    }

    async updateABCPerItem(id, data) {
        return await ABCPerItem.update(data, { where: { id } });
    }

    async deleteABCPerItem(id) {
        return await ABCPerItem.destroy({ where: { id } });
    }
}

module.exports = new ABCPerItemRepository();
