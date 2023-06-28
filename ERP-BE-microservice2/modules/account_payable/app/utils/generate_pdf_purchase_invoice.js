const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
const moment = require('moment');

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePDFPurchaseInvoice = (invoice) => {
    let invoiceDate = moment(invoice.invoice_date).format('DD-MM-YYYY');
    let dueDate = moment(invoice.due_date).format('DD-MM-YYYY');

    const purchaseOrderDetails =
        invoice.purchase_order.InPurchaseOrderDetails.map((detail) => {
            return [
                { text: detail.InItem.name, alignment: 'left' },
                {
                    text: detail.quantity.toLocaleString('id-ID'),
                    alignment: 'center',
                },
                { text: detail.unit, alignment: 'center' },
                {
                    text: `${
                        invoice.currency.symbol
                    } ${detail.price.toLocaleString('id-ID')}`,
                    alignment: 'left',
                },
                // Only include the tax column if taxes are included
                ...(invoice.taxes_included
                    ? [
                          {
                              text: `${
                                  invoice.currency.symbol
                              } ${detail.tax.toLocaleString('id-ID')}`,
                              alignment: 'left',
                          },
                      ]
                    : []),
                {
                    text: `${
                        invoice.currency.symbol
                    } ${detail.total.toLocaleString('id-ID')}`,
                    alignment: 'left',
                },
                { text: detail.InItem.id_coa, alignment: 'center' },
                { text: detail.InItem.id_tax, alignment: 'center' },
                { text: detail.InItem.id_category, alignment: 'center' },
                {
                    text: detail.budgetStatus ? 'YES' : 'NO',
                    alignment: 'center',
                },
            ];
        });

    // Invoice Details
    const invoiceDetails = [
        {
            text: 'Invoice Details:',
            margin: [0, 20, 0, 8],
            bold: true,
        },
    ];

    // If there is a purchase_down_payment_invoice_id, add down payment details
    if (invoice.purchase_down_payment_invoice_id) {
        invoiceDetails.push({
            table: {
                headerRows: 1,
                widths: ['*', 'auto'],
                body: [
                    [
                        'ID Purchase Invoice Down Payment',
                        {
                            text: `${invoice.purchase_down_payment_invoice_id}`,
                            alignment: 'right',
                        },
                    ],
                    [
                        'Down Payment Percent',
                        {
                            text: `${invoice.purchase_down_payment_invoice.dp_percent}%`,
                            alignment: 'right',
                        },
                    ],
                    [
                        'Down Payment Paid Amount',
                        {
                            text: `${invoice.currency.symbol} ${parseFloat(
                                invoice.purchase_down_payment_invoice
                                    .dp_paid_amount,
                            ).toLocaleString('id-ID')}`,
                            alignment: 'right',
                        },
                    ],
                    [
                        'Remaining Payments',
                        {
                            text: `${invoice.currency.symbol} ${parseFloat(
                                invoice.purchase_down_payment_invoice
                                    .remaining_payments,
                            ).toLocaleString('id-ID')}`,
                            alignment: 'right',
                        },
                    ],
                ],
            },
            layout: 'lightHorizontalLines',
            margin: [0, 0, 0, 20],
        });
    }

    let invoiceNumber = `Invoice No:\t\t${invoice.invoice_number}`;
    let idPurchaseInvoice = `ID Purchase Invoice:\t\t${invoice.id}`;
    let formattedInvoiceDate = `Invoice Date:\t\t\t\t\t${invoiceDate}`;
    let formattedDueDate = `Due Date:\t\t\t\t\t${dueDate}`;

    const docDefinition = {
        content: [
            {
                text: 'PURCHASE INVOICE',
                fontSize: 20,
                bold: true,
                alignment: 'center',
                margin: [0, 0, 0, 10],
            },
            {
                canvas: [
                    {
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 520,
                        y2: 0,
                        lineWidth: 2,
                        lineColor: '#0000FF',
                        margin: [0, 10, 0, 10],
                    },
                ],
            },
            {
                columns: [
                    [
                        {
                            text: 'ERP Company Name',
                            fontSize: 14,
                            bold: true,
                            margin: [0, 20, 0, 10],
                        },
                        { text: 'Jl. Teknik Kimia', margin: [0, 0, 0, 5] },
                        {
                            text: 'Surabaya, Jawa Timur, Indonesia, 60111',
                            margin: [0, 0, 0, 5],
                        },
                        { text: '031-5994251-54', margin: [0, 0, 0, 20] },
                    ],
                    [
                        {
                            text: idPurchaseInvoice,
                            alignment: 'right',
                            margin: [0, 20, 0, 0],
                        },
                        {
                            text: invoiceNumber,
                            alignment: 'right',
                            margin: [0, 10, 0, 0],
                        },
                        {
                            text: formattedInvoiceDate,
                            alignment: 'right',
                            margin: [0, 10, 0, 0],
                        },
                        {
                            text: formattedDueDate,
                            alignment: 'right',
                            margin: [0, 10, 0, 10],
                        },
                    ],
                ],
            },

            // Supplier Information
            {
                text: `Supplier: ${invoice.purchase_order.InSupplier.name}`,
                bold: true,
                margin: [0, 10, 0, 10],
            },
            {
                text: `Address: ${invoice.purchase_order.InSupplier.address}`,
            },
            {
                text: `Phone: ${invoice.purchase_order.InSupplier.phone}`,
            },
            {
                text: `Email: ${invoice.purchase_order.InSupplier.email}`,
                margin: [0, 0, 0, 10],
            },

            // Item Details
            {
                text: 'Item Details:',
                margin: [0, 20, 0, 8],
                bold: true,
            },
            {
                table: {
                    headerRows: 1,
                    widths: [
                        'auto',
                        'auto',
                        'auto',
                        'auto',
                        ...(invoice.taxes_included ? ['auto'] : []),
                        'auto',
                        'auto',
                        'auto',
                        'auto',
                        'auto',
                    ],
                    body: [
                        [
                            { text: 'Item Name', style: 'tableHeader' },
                            {
                                text: 'Quantity',
                                style: 'tableHeader',
                                alignment: 'center',
                            },
                            {
                                text: 'Unit',
                                style: 'tableHeader',
                                alignment: 'center',
                            },
                            { text: 'Price', style: 'tableHeader' },
                            ...(invoice.taxes_included
                                ? [{ text: 'Tax', style: 'tableHeader' }]
                                : []),
                            { text: 'Total', style: 'tableHeader' },
                            {
                                text: 'COA ID',
                                style: 'tableHeader',
                                alignment: 'center',
                            },
                            {
                                text: 'Tax ID',
                                style: 'tableHeader',
                                alignment: 'center',
                            },
                            {
                                text: 'Category ID',
                                style: 'tableHeader',
                                alignment: 'center',
                            },
                            {
                                text: 'Budget Status',
                                style: 'tableHeader',
                                alignment: 'center',
                            },
                        ],
                        ...purchaseOrderDetails,
                    ],
                },
                layout: {
                    fillColor: function (rowIndex, node, columnIndex) {
                        return rowIndex === 0 ? '#ADD8E6' : null;
                    },
                },
                margin: [0, 0, 0, 20],
            },

            // Add the new Invoice Details array
            ...invoiceDetails,

            // Total payment detail
            {
                columns: [
                    { text: '', width: '*' },
                    {
                        width: 'auto',
                        table: {
                            widths: ['*', 'auto'],
                            body: [
                                [
                                    { text: 'Subtotal', alignment: 'right' },
                                    {
                                        text: `${
                                            invoice.currency.symbol
                                        } ${parseFloat(
                                            invoice.total_price_item,
                                        ).toLocaleString('id-ID')}`,
                                        alignment: 'right',
                                    },
                                ],
                                ...(invoice.taxes_included
                                    ? [
                                          [
                                              {
                                                  text: 'Tax',
                                                  alignment: 'right',
                                              },
                                              {
                                                  text: `${
                                                      invoice.currency.symbol
                                                  } ${parseFloat(
                                                      invoice.total_taxes,
                                                  ).toLocaleString('id-ID')}`,
                                                  alignment: 'right',
                                              },
                                          ],
                                      ]
                                    : []),
                                [
                                    { text: 'Total', alignment: 'right' },
                                    {
                                        text: `${
                                            invoice.currency.symbol
                                        } ${parseFloat(
                                            invoice.taxes_included
                                                ? invoice.total_amount
                                                : invoice.total_price_item,
                                        ).toLocaleString('id-ID')}`,
                                        alignment: 'right',
                                    },
                                ],
                            ],
                        },
                        layout: 'noBorders',
                        alignment: 'right',
                    },
                ],
            },

            // Footer
            {
                text: `This is a computer-generated document. No signature is required.`,
                style: 'footer',
                alignment: 'center',
                margin: [0, 50, 0, 0],
            },
        ],
        styles: {
            footer: {
                fontSize: 10,
                bold: true,
            },
            tableHeader: {
                bold: true,
                alignment: 'center',
                fillColor: '#ADD8E6',
            },
        },
    };

    const pdfDoc = pdfMake.createPdf(docDefinition);
    return new Promise((resolve, reject) => {
        pdfDoc.getBuffer((buffer) => {
            resolve(buffer);
        });
    });
};

module.exports = generatePDFPurchaseInvoice;
