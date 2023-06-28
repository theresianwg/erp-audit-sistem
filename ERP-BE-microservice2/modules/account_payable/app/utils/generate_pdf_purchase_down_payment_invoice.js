const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePDFPurchaseDownPaymentInvoice = (invoice) => {
    const purchaseOrderDetails =
        invoice.purchase_order.InPurchaseOrderDetails.map((detail) => {
            return [
                detail.InItem.name,
                detail.quantity.toString(),
                detail.unit,
                detail.price.toString(),
                detail.tax.toString(),
                detail.total.toString(),
            ];
        });

    const docDefinition = {
        content: [
            {
                text: 'PURCHASE DOWN PAYMENT INVOICE',
                fontSize: 20,
                bold: true,
                alignment: 'center',
                margin: [0, 0, 0, 20],
            },
            {
                columns: [
                    [
                        {
                            text: 'ERP Company Name',
                            fontSize: 14,
                            bold: true,
                            margin: [0, 0, 0, 10],
                        },
                        { text: 'Jl. Teknik Kimia' },
                        { text: 'Surabaya, Jawa Timur, Indonesia, 60111' },
                        { text: '031-5994251-54' },
                    ],
                    [
                        {
                            text: `ID Purchase Down Payment: ${invoice.id}`,
                            alignment: 'right',
                            margin: [0, 10, 0, 0],
                        },
                        {
                            text: `Invoice No: ${invoice.invoice_number}`,
                            alignment: 'right',
                            margin: [0, 10, 0, 0],
                        },
                        {
                            text: `Invoice Date: ${invoice.invoice_date}`,
                            alignment: 'right',
                            margin: [0, 10, 0, 0],
                        },
                        {
                            text: `Due Date: ${invoice.due_date}`,
                            alignment: 'right',
                            margin: [0, 10, 0, 0],
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
                margin: [0, 0, 0, 20],
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
                    widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                    body: [
                        [
                            'Item Name',
                            'Quantity',
                            'Unit',
                            'Price',
                            'Tax',
                            'Total',
                        ],
                        ...purchaseOrderDetails,
                    ],
                },
                layout: 'lightHorizontalLines',
                margin: [0, 0, 0, 20],
            },

            // Invoice Details
            {
                text: 'Invoice Details:',
                margin: [0, 20, 0, 8],
                bold: true,
            },
            {
                table: {
                    headerRows: 1,
                    widths: ['*', 'auto'],
                    body: [
                        ['Down Payment Percent', `${invoice.dp_percent}%`],
                        [
                            'Down Payment Paid Amount',
                            `${invoice.dp_paid_amount}`,
                        ],
                        ['Remaining Payments', `${invoice.remaining_payments}`],
                    ],
                },
                layout: 'lightHorizontalLines',
                margin: [0, 0, 0, 20],
            },

            // Total payment detail
            {
                columns: [
                    { text: '', width: '*' },
                    {
                        width: 'auto',
                        table: {
                            widths: ['*', 'auto'],
                            body: [
                                ['Subtotal', `${invoice.total_price_item}`],
                                ['Tax', `${invoice.total_taxes}`],
                                ['Total', `${invoice.total_amount}`],
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
        },
    };

    const pdfDoc = pdfMake.createPdf(docDefinition);
    return new Promise((resolve, reject) => {
        pdfDoc.getBuffer((buffer) => {
            resolve(buffer);
        });
    });
};

module.exports = generatePDFPurchaseDownPaymentInvoice;
