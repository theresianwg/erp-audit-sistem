const productionRequestService = require('../services/mf_productionRequestService');
const productionOrderService = require('../services/mf_productionOrderService');

// const receiveProductService = require("../services/mf_receiveProductService")

const changePRStatus = async (id) => {
    const update = { pr_status: 'Done' };

    const status = await productionRequestService.update(id, update);
};

const changePOStatus = async (id) => {
    const update = { po_status: 'Done' };

    const statuss = await productionOrderService.update(id, updatee);
};

module.exports = {
    changePRStatus,
    changePOStatus,
};
