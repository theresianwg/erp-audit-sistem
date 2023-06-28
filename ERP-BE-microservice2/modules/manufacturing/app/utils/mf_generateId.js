const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = date.getDate();
    return `${year}${month}${day}`;
};

const generateIdItem = (type) => {
    switch (type) {
        case 'finished good':
            return 'IJ' + Math.floor(1000 + Math.random() * 9000);
        case 'intermediete good':
            return 'IS' + Math.floor(1000 + Math.random() * 9000);
        case 'purchased':
            return 'IM' + Math.floor(1000 + Math.random() * 9000);
    }
};

const generateWorkcentreId = () => {
    return 'WC' + Math.floor(1000 + Math.random() * 9000);
};

const generateMachineId = () => {
    return 'M' + Math.floor(1000 + Math.random() * 9000);
};

const generateManId = () => {
    return 'MAN' + Math.floor(1000 + Math.random() * 9000);
};

const generateManSkillId = () => {
    return 'MAS' + Math.floor(1000 + Math.random() * 9000);
};

const generateOperationId = () => {
    return 'O' + Math.floor(1000 + Math.random() * 9000);
};

const generateCostAccountingId = () => {
    return 'COA' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateCostAccountingDetailId = (costAccounting) => {
    return costAccounting + '0' + Math.floor(100 + Math.random() * 900);
};

const generateProductionRequestId = () => {
    return 'PDR' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateProductionOrderId = () => {
    return 'PDO' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};
const generateReceiveProductId = () => {
    return 'RCP' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateIssueMaterialId = () => {
    return 'ISM' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateInspectionProduct = () => {
    return 'ISP' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};
const generateTransferOrderId = () => {
    return 'TRO' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateJobOrderId = () => {
    return 'JO' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateMachineUsageId = () => {
    return 'MCU' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateRequestManId = () => {
    return 'RQM' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateMasterRoutingId = () => {
    return 'MSR' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateOperationDetailId = () => {
    return 'OPD' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
};

const generateJobOrderDetailId = (jobOrderId) => {
    return jobOrderId + '0' + Math.floor(100 + Math.random() * 900);
};

module.exports = {
    generateIdItem,
    generateCostAccountingId,
    generateCostAccountingDetailId,
    generateProductionRequestId,
    generateWorkcentreId,
    generateMachineId,
    generateOperationId,
    generateProductionOrderId,
    generateReceiveProductId,
    generateIssueMaterialId,
    generateInspectionProduct,
    generateTransferOrderId,
    generateManId,
    generateManSkillId,
    generateJobOrderId,
    generateJobOrderDetailId,
    generateMachineUsageId,
    generateRequestManId,
    generateMasterRoutingId,
    generateOperationDetailId,
};
