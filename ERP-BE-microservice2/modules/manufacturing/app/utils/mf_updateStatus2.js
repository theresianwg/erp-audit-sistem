const productionOrderRepository = require('../repositories/mf_productionOrderRepository');

// const receiveProductService = require("../services/mf_receiveProductService")

const changePOStatus = async (id) => {
    const updatee = { po_status: 'Done' };

    const statuss = await productionOrderRepository.update(id, updatee);
};

module.exports = {
    changePOStatus,
};
