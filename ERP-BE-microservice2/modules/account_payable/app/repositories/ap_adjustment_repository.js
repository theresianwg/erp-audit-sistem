const { ApAdjustment } = require('../../../../models');

exports.create = async (adjustmentData) => {
    return await ApAdjustment.create(adjustmentData);
};

exports.findAll = async () => {
    return await ApAdjustment.findAll();
};

exports.findOne = async (id) => {
    return await ApAdjustment.findOne({ where: { id } });
};

exports.update = async (id, adjustmentData) => {
    return await ApAdjustment.update(adjustmentData, {
        where: { id },
    });
};

exports.delete = async (id) => {
    return await ApAdjustment.destroy({ where: { id } });
};
