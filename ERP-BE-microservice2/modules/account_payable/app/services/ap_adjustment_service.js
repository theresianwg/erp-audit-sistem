const apAdjustmentRepository = require('../repositories/ap_adjustment_repository');

exports.create = async (adjustmentData) => {
    return await apAdjustmentRepository.create(adjustmentData);
};

exports.findAll = async () => {
    return await apAdjustmentRepository.findAll();
};

exports.findOne = async (id) => {
    return await apAdjustmentRepository.findOne(id);
};

exports.update = async (id, adjustmentData) => {
    return await apAdjustmentRepository.update(id, adjustmentData);
};

exports.delete = async (id) => {
    return await apAdjustmentRepository.delete(id);
};
