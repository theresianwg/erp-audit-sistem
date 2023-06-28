const { ApPurchaseInvoice } = require('../../../../models');
const InPurchaseOrder = require('../../../../models').InPurchaseOrder;
const InSupplier = require('../../../../models').InSupplier;
const InPurchaseRequest = require('../../../../models').InPurchaseRequest;
const InPurchaseOrderDetails =
    require('../../../../models').InPurchaseOrderDetail;
const InItem = require('../../../../models').InItem;
const CbCurrency = require('../../../../models').CbCurrency;
const ApPurchaseDownPaymentInvoice =
    require('../../../../models').ApPurchaseDownPaymentInvoice;
const { Op } = require('sequelize');

const getAttributes = () => [
    'id',
    'invoice_number',
    'invoice_date',
    'due_date',
    'total_amount',
    'total_taxes',
    'total_price_item',
    'discounts',
    'received_date',
    'purchase_order_id',
    'payment_status',
    'purchase_down_payment_invoice_id',
    'description',
    'taxes_included',
    'createdAt',
    'updatedAt',
];

const getInclude = () => [
    {
        model: InPurchaseOrder,
        as: 'purchase_order',
        attributes: [
            'id',
            'id_purchase_request',
            'id_supplier',
            'total_price',
            'total_tax',
            'total_price_tax',
            'createdAt',
            'updatedAt',
        ],
        include: [
            {
                model: InSupplier,
                attributes: ['id', 'name', 'address', 'phone', 'email'],
            },
            {
                model: InPurchaseRequest,
                attributes: ['id', 'createdAt', 'updatedAt'],
            },
            {
                model: InPurchaseOrderDetails,
                attributes: [
                    'id',
                    'id_purchase_order',
                    'id_item',
                    'quantity',
                    'unit',
                    'price',
                    'tax',
                    'total',
                    'budgetStatus',
                    'createdAt',
                    'updatedAt',
                ],
                include: [
                    {
                        model: InItem,
                        attributes: [
                            'id',
                            'name',
                            'id_category',
                            'id_coa',
                            'id_tax',
                            'buy_price',
                            'buy_unit',
                        ],
                    },
                ],
            },
        ],
    },
    {
        model: CbCurrency,
        as: 'currency',
        attributes: ['id', 'name', 'symbol', 'code'],
    },
    {
        model: ApPurchaseDownPaymentInvoice,
        as: 'purchase_down_payment_invoice',
        attributes: [
            'id',
            'invoice_number',
            'invoice_date',
            'due_date',
            'total_amount',
            'total_taxes',
            'total_price_item',
            'discounts',
            'received_date',
            'payment_status',
            'description',
            'taxes_included',
            'dp_percent',
            'dp_paid_amount',
            'remaining_payments',
        ],
    },
];

exports.create = async (invoiceData) => {
    return await ApPurchaseInvoice.create(invoiceData);
};

exports.findAll = async () => {
    return await ApPurchaseInvoice.findAll({
        attributes: getAttributes(),
        include: getInclude(),
        order: [['updatedAt', 'DESC']],
    });
};

exports.findById = async (id) => {
    return await ApPurchaseInvoice.findOne({
        where: { id },
        attributes: getAttributes(),
        include: getInclude(),
    });
};

exports.findLatest = async () => {
    return await ApPurchaseInvoice.findOne({
        attributes: getAttributes(),
        include: getInclude(),
        order: [['createdAt', 'DESC']],
    });
};

exports.update = async (id, invoiceData) => {
    const invoice = await ApPurchaseInvoice.findOne({
        where: { id },
    });

    if (!invoice) {
        throw new Error('Invoice not found');
    }

    await invoice.update(invoiceData);

    if (invoiceData.purchase_order) {
        const purchaseOrder = await InPurchaseOrder.findOne({
            where: { id: invoice.purchase_order_id },
        });

        if (!purchaseOrder) {
            throw new Error('Purchase order not found');
        }

        await purchaseOrder.update(invoiceData.purchase_order);
    }

    return invoice;
};

exports.delete = async (id) => {
    return await ApPurchaseInvoice.destroy({ where: { id } });
};

exports.searchInvoices = async (searchTerms) => {
    const searchConditions = [];

    if (searchTerms.id) {
        searchConditions.push({ id: searchTerms.id });
    }

    if (searchTerms.invoice_number) {
        searchConditions.push({
            invoice_number: { [Op.like]: `%${searchTerms.invoice_number}%` },
        });
    }

    if (searchTerms.purchase_order_id) {
        searchConditions.push({
            purchase_order_id: {
                [Op.like]: `%${searchTerms.purchase_order_id}%`,
            },
        });
    }

    if (searchTerms.purchase_down_payment_invoice_id) {
        searchConditions.push({
            purchase_down_payment_invoice_id: {
                [Op.like]: `%${searchTerms.purchase_down_payment_invoice_id}%`,
            },
        });
    }

    return ApPurchaseInvoice.findAll({
        attributes: getAttributes(),
        include: getInclude(),
        where: {
            [Op.and]: searchConditions,
        },
    });
};

exports.updatePaymentStatus = async (id, status) => {
    const invoice = await ApPurchaseInvoice.findOne({
        where: { id },
    });

    if (!invoice) {
        throw new Error('Invoice not found');
    }

    await invoice.update({ payment_status: status.payment_status });

    return invoice;
};

exports.updateSelectedFields = async (id, invoiceData) => {
    const invoice = await ApPurchaseInvoice.findOne({
        where: { id },
    });

    if (!invoice) {
        throw new Error('Invoice not found');
    }

    const allowedUpdates = ['invoice_date', 'due_date', 'description'];
    const attemptedUpdates = Object.keys(invoiceData);

    const isValidUpdate = attemptedUpdates.every((update) =>
        allowedUpdates.includes(update),
    );

    if (!isValidUpdate) {
        throw new Error(
            'Invalid update. Only Invoice Date, Due Date, and Description can be updated.',
        );
    }

    await invoice.update(invoiceData);

    return invoice;
};
