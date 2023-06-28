const { InItem, GlItemCategory, InInventory, InItemDetail } = require('../../../../models');
const { Op } = require("sequelize");

class ItemRepository {
    async getAll() {
        return await InItem.findAll({
            attributes: [
                'id',
                'name',
                'id_coa',
                'id_category',
                'id_tax',
                'sale_price',
                'sale_unit',
                'buy_price',
                'buy_unit',
                'createdAt',
                'updatedAt',
            ],
            include: [
                {
                    model: GlItemCategory,
                    attributes: ['Category_Name'],
                },
                {
                    model: InInventory,
                    attributes: ['quantity'],
                },
            ],
        });
    }

    async getById(id) {
        return await InItem.findByPk(id, {
            attributes: [
                'id',
                'name',
                'id_coa',
                'id_category',
                'id_tax',
                'sale_price',
                'sale_unit',
                'buy_price',
                'buy_unit',
                'createdAt',
                'updatedAt',
            ],
            include: [
                {
                    model: GlItemCategory,
                    attributes: ['Category_Name'],
                },
                {
                    model: InItemDetail,
                    attributes: ['id', 'id_item', 'buy_price', 'quantity', 'date'],
                    // where: {
                    //     quantity: {
                    //         [Op.or]: {
                    //             [Op.gt]: 0,
                    //             [Op.eq]: null
                    //         }
                    //     },
                    // },
                }
            ],
            order: [
                [InItemDetail, 'date', 'DESC']
            ],      
        });
    }

    async getEndProducts() {
        return await InItem.findAll({
            attributes: ['id', 'name', 'id_coa', 'id_category', 'id_tax', 'sale_price', 'sale_unit', 'buy_price', 'buy_unit', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: GlItemCategory,
                    attributes: ['Category_Name'],
                    where: {
                        Category_Name: 'End Product',
                    },
                },
            ],
        });
    }

    async createItemDetail(data) {
        return await InItemDetail.create(data);
    }

    async getCategoryById(id) {
        return await GlItemCategory.findByPk(id);
    }

    async create(data) {
        return await InItem.create(data);
    }

    async update(id, item) {
        return await InItem.update(item, { where: { id: id } });
    }

    async updateItemDetail(id, item) {
        return await InItemDetail.update(item, { where: { id: id } });
    }

    async delete(id) {
        return await InItem.destroy({ where: { id: id } });
    }
}

module.exports = new ItemRepository();
