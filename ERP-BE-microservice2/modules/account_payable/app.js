const path = require('path');
const dotenvPath = path.join(__dirname, '.env');
require('dotenv').config({ path: dotenvPath });

const express = require('express');
const app = express();
const config = require('../../config/config');
const cors = require('cors');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');

const apPurchaseDownPaymentInvoiceRoutes = require('./app/routes/ap_purchase_down_payment_invoice_routes');
const apPurchaseInvoiceRoutes = require('./app/routes/ap_purchase_invoice_routes');
const apPurchaseReturnInvoiceRoutes = require('./app/routes/ap_purchase_return_invoice_routes');
const apAdjustmentRoutes = require('./app/routes/ap_adjustment_routes');

// check status env
// console.log('Current configuration:', config.development);

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect,
        port: config.development.port,
    },
);

// Add CORS middleware
app.use(cors());

// Middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Morgan logging middleware
app.use(morgan('combined'));

// Account Payable Routes
app.use(
    '/api/ap_purchase_down_payment_invoices',
    apPurchaseDownPaymentInvoiceRoutes,
);
app.use('/api/ap_purchase_invoices', apPurchaseInvoiceRoutes);
app.use('/api/ap_purchase_return_invoices', apPurchaseReturnInvoiceRoutes);
app.use('/api/ap_adjustments', apAdjustmentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message });
});

app.listen(config.ACCOUNT_PAYABLE_PORT, () => {
    console.log(
        `Server account payable running on port ${config.ACCOUNT_PAYABLE_PORT}`,
    );
});

module.exports = app;
