const ItemRepository = require('../repositories/itemRepository');
const InventoryRepository = require('../repositories/inventoryRepository');
const { generateIdItem, generateIdItemDetail } = require('../utils/generateId');
const itemInput = require('../dataTypes/itemInputDataType');

class ItemService {
    async getAll() {
        try {
            const items = await ItemRepository.getAll();
            return items;
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        return await ItemRepository.getById(id);
    }

    async getEndProducts() {
        return await ItemRepository.getEndProducts();
    }

    async create(item) {
        try {
            // const data = itemInput;
            const data = {};
            data.name = item.name;
            data.id_category = item.id_category;
            data.id_tax = item.id_tax;
            data.unit = item.unit;
            data.id_coa = item.id_coa;
            if (
                item.id_category == 2
                //|| item.GlItemCategory.Category_Name == 'End Product'
            ) {
                data.sale_price = item.price;
                data.sale_unit = item.unit;
                data.id = await generateIdItem(item.id_category);
                data.buy_price = 0;
                data.buy_unit = '';
            } else {
                data.buy_price = item.price;
                data.buy_unit = item.unit;
                data.id = await generateIdItem(item.id_category);
                data.sale_price = 0;
                data.sale_unit = '';
            }

            const items = await ItemRepository.create(data);
            return items;
        } catch (err) {
            return err;
        }
    }

    async createItemDetail(item) {
        item.id = generateIdItemDetail(item.id_item);
        console.log(item);
        return await ItemRepository.createItemDetail(item);
    }

    async update(id, item) {
        const itemRepositoryResponse = await ItemRepository.update(id, item);
        let inventoryResponse;
        if (item.InInventory) {
            inventoryResponse = await InventoryRepository.updateInventory(
                id,
                item.InInventory,
            );
        }
        return { itemRepositoryResponse, inventoryResponse };
    }

    async updateItemDetail(id, item) {
        return await ItemRepository.updateItemDetail(id, item);
    }

    async delete(id) {
        return await ItemRepository.delete(id);
    }
}

module.exports = new ItemService();
