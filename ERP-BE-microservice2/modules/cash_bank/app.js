const path = require('path');
const dotenvPath = path.join(__dirname, '.env');
require('dotenv').config({ path: dotenvPath });

const express = require('express');
const app = express();
const config = require('../../config/config');
const cors = require('cors');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');

const cbCurrencyRoutes = require('./app/routes/cb_currency_routes');

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

// Cash Bank Routes
app.use('/api/cb_currencies', cbCurrencyRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message });
});

app.listen(config.CASH_BANK_PORT, () => {
    console.log(`Server cash bank running on port ${config.CASH_BANK_PORT}`);
});

module.exports = app;
