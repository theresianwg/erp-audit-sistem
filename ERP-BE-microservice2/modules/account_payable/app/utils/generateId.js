const { ApPurchaseDownPaymentInvoice } = require('../../../../models');
const { ApPurchaseInvoice } = require('../../../../models');
const { Op } = require('sequelize');

const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}${month}${day}`;
};

const getLastPurchaseDownPaymentInvoiceId = async () => {
    const lastInvoice = await ApPurchaseDownPaymentInvoice.findOne({
        where: {
            id: {
                [Op.like]: 'PDI%',
            },
        },
        order: [['createdAt', 'DESC']],
    });
    return lastInvoice ? lastInvoice.id : '';
};

const generateApPurchaseDownPaymentInvoiceId = async () => {
    const date = getDate();
    const lastInvoiceId = await getLastPurchaseDownPaymentInvoiceId();
    let nextSequence;

    if (
        lastInvoiceId &&
        lastInvoiceId.startsWith('PDI' + date) &&
        lastInvoiceId.length === 15
    ) {
        nextSequence = parseInt(lastInvoiceId.slice(11, 15), 10) + 1;
    } else {
        nextSequence = 1;
    }

    return `PDI${date}${nextSequence.toString().padStart(4, '0')}`;
};

const getLastPurchaseInvoiceId = async () => {
    const lastInvoice = await ApPurchaseInvoice.findOne({
        where: {
            id: {
                [Op.like]: 'PIN%',
            },
        },
        order: [['createdAt', 'DESC']],
    });
    return lastInvoice ? lastInvoice.id : '';
};

const generateApPurchaseInvoiceId = async () => {
    const date = getDate();
    const lastInvoiceId = await getLastPurchaseInvoiceId();
    let nextSequence;

    if (
        lastInvoiceId &&
        lastInvoiceId.startsWith('PIN' + date) &&
        lastInvoiceId.length === 15
    ) {
        nextSequence = parseInt(lastInvoiceId.slice(11, 15), 10) + 1;
    } else {
        nextSequence = 1;
    }

    return `PIN${date}${nextSequence.toString().padStart(4, '0')}`;
};

module.exports = {
    generateApPurchaseDownPaymentInvoiceId,
    generateApPurchaseInvoiceId,
};
