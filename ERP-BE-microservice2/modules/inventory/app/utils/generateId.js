const ItemRepository = require('../repositories/itemRepository');

const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = date.getDate();
    return `${year}${month}${day}`;
};

const getTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour}${minute}`;
}

const generateIdItem = async (id_category) => {
    const category = await ItemRepository.getCategoryById(id_category);
    return category.Category_Code + Math.floor(1000 + Math.random() * 9000);
};

const generateIdItemDetail = (id_item) => {
    return id_item + "-" + getDate() + "-" + getTime();
}

const generateBomId = () => {
    return 'BOM' + Math.floor(1000 + Math.random() * 9000);
};

const generateSalesOrderId = () => {
    return 'SO' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateSalesOrderDetailId = (salesOrderId) => {
    return salesOrderId + '0' + Math.floor(100 + Math.random() * 900);
};

const generatePurchaseRequestId = () => {
    return 'PR' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generatePurchaseRequestDetailId = (purchaseRequestId) => {
    return purchaseRequestId + '0' + Math.floor(100 + Math.random() * 900);
};

const generatePurchaseOrderId = () => {
    return 'PO' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generatePurchaseOrderDetailId = (purchaseRequestId) => {
    return purchaseRequestId + '0' + Math.floor(100 + Math.random() * 900);
};

const generateTfToCust = () => {
    return 'TFC' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateTfToInvent = () => {
    return 'TFI' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateTfToInventDetail = (tfToInventId) => {
    return tfToInventId + '0' + Math.floor(100 + Math.random() * 900);
};

const generateReceiveItemId = () => {
    return 'RCI' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateReceiveItemDetail = (receiveItemId) => {
    return receiveItemId + '0' + Math.floor(100 + Math.random() * 900);
};

const generateUnaprovedItemId = () => {
    return 'UAI' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateDelayedProductionRequestId = () => {
    return 'DPR' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateSupplierId = () => {
    return 'SU' + '0' + Math.floor(100 + Math.random() * 900);
};

module.exports = {
    generateIdItem,
    generateBomId,
    generateSalesOrderId,
    generateSalesOrderDetailId,
    generatePurchaseRequestId,
    generatePurchaseRequestDetailId,
    generatePurchaseOrderId,
    generatePurchaseOrderDetailId,
    generateTfToCust,
    generateTfToInvent,
    generateTfToInventDetail,
    generateReceiveItemId,
    generateReceiveItemDetail,
    generateUnaprovedItemId,
    generateDelayedProductionRequestId,
    generateIdItemDetail,
    generateSupplierId
};
