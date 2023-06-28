const apPurchaseReturnInvoiceRepository = require('../repositories/ap_purchase_return_invoice_repository');

exports.create = async (returnInvoiceData) => {
    return await apPurchaseReturnInvoiceRepository.create(returnInvoiceData);
};

exports.findAll = async () => {
    return await apPurchaseReturnInvoiceRepository.findAll();
};

exports.findOne = async (id) => {
    return await apPurchaseReturnInvoiceRepository.findOne(id);
};

exports.update = async (id, returnInvoiceData) => {
    return await apPurchaseReturnInvoiceRepository.update(
        id,
        returnInvoiceData,
    );
};

exports.delete = async (id) => {
    return await apPurchaseReturnInvoiceRepository.delete(id);
};
