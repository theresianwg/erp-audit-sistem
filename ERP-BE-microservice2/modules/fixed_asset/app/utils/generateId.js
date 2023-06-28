const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = date.getDate();
    return `${year}${month}${day}`;
};
const generateAssetId = () => {
    return 'FA' + '00' + getDate();
};
const generateAssetCode = (golongan, nomor, num) => {
    return '0' + golongan + '.' + '0' + nomor + '.' + num;
};
const generateAssetCategoryId = () => {
    return 'CA' + Math.floor(1000 + Math.random() * 9000);
    // return 'CA' + '00' + (num + 1);
};
const generateAssetDisposalId = () => {
    return 'FAD' + Math.floor(1000 + Math.random() * 9000);
    // return 'FAD' + '00' + (num + 1);
};
const generateAssetTransferId = () => {
    return 'FAT' + Math.floor(1000 + Math.random() * 9000);
    // return 'FAT' + '00' + (num + 1);
};
const generateAssetMaintenanceId = () => {
    return 'FAM' + Math.floor(1000 + Math.random() * 9000);
    // return 'FAM' + '00' + (num + 1);
};
const generateAssetStockTakeId = () => {
    return 'FAST' + Math.floor(1000 + Math.random() * 9000);
    // return 'FAST' + '00' + (num + 1);
};
const generateFiscalTypeId = () => {
    return 'FT' + Math.floor(1000 + Math.random() * 9000);
    // return 'FT' + '00' + (num + 1);
};
const generateAssetDepreciationId = () => {
    return 'FD' + Math.floor(1000 + Math.random() * 9000);
    // return 'FD' + '00' + (num + 1);
};
const generateAssetRevaluationId = () => {
    return 'FD' + Math.floor(1000 + Math.random() * 9000);
    // return 'AR' + '00' + (num + 1);
};

module.exports = {
    generateAssetCode,
    generateAssetId,
    generateAssetCategoryId,
    generateAssetDisposalId,
    generateAssetTransferId,
    generateAssetMaintenanceId,
    generateAssetStockTakeId,
    generateFiscalTypeId,
    generateAssetDepreciationId,
    generateAssetRevaluationId,
};
