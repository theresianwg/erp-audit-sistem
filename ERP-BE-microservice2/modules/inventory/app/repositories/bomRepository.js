const { InBomChild, InBomParent, InItem } = require('../../../../models');

class BomRepository {
    async getBomByParentId(id) {
        const bom = await InBomParent.findOne({
            where: {
                id_parent_item: id,
            },
            include: [
                {
                    model: InBomChild,
                    attributes: ['quantity'],
                    include: [
                        {
                            model: InItem,
                            attributes: ['id', 'name', 'id_category'],
                        },
                    ],
                },
                {
                    model: InItem,
                    attributes: ['name', 'id_category'],
                },
            ],
        });
        return bom;
    }

    async createParentBom(bom) {
        const bomCreated = await InBomParent.create(bom);
        return bomCreated;
    }

    async createChildBom(bom) {
        const bomCreated = await InBomChild.create(bom);
        return bomCreated;
    }
}

module.exports = new BomRepository();
