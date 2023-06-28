const { ApPurchaseReturnInvoice } = require('../../../../models');

exports.create = async (returnInvoiceData) => {
    return await ApPurchaseReturnInvoice.create(returnInvoiceData);
};

exports.findAll = async () => {
    return await ApPurchaseReturnInvoice.findAll();
};

exports.findOne = async (id) => {
    return await ApPurchaseReturnInvoice.findOne({ where: { id } });
};

exports.update = async (id, returnInvoiceData) => {
    return await ApPurchaseReturnInvoice.update(returnInvoiceData, {
        where: { id },
    });
};

exports.delete = async (id) => {
    return await ApPurchaseReturnInvoice.destroy({ where: { id } });
};
