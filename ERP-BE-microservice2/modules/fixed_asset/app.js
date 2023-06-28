const path = require('path');
const dotenvPath = path.join(__dirname, '.env');
require('dotenv').config({ path: dotenvPath });

const express = require('express');
const app = express();
const config = require('../../config/config');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const { Sequelize } = require('sequelize');

const FiscalTypeRoute = require('./app/routes/fa_fiscal_type_route');
const Asset = require('./app/routes/fa_asset_route');
const AssetTransfer = require('./app/routes/fa_asset_transfer_route');
const AssetMaintenance = require('./app/routes/fa_asset_maintenance_route');
const AssetDisposal = require('./app/routes/fa_asset_disposal_route');
const AssetRevaluation = require('./app/routes/fa_asset_revaluation_route');
const AssetStockTake = require('./app/routes/fa_asset_stock_take_route');
const AssetDepreciation = require('./app/routes/fa_asset_depreciation_route');
const Category = require('./app/routes/fa_category_route');
const Group = require('./app/routes/fa_group_route');
const NumberGroup = require('./app/routes/fa_number_group_route');
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
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(multer().array());
app.use(express.static('public'));

// Morgan logging middleware
app.use(morgan('combined'));

// Fixed Asset Routes
app.use('/api/fa_fiscal_type', FiscalTypeRoute);
app.use('/api/fa_asset', Asset);
app.use('/api/fa_asset_transfer', AssetTransfer);
app.use('/api/fa_asset_maintenance', AssetMaintenance);
app.use('/api/fa_asset_disposal', AssetDisposal);
app.use('/api/fa_asset_revaluation', AssetRevaluation);
app.use('/api/fa_asset_stock_take', AssetStockTake);
app.use('/api/fa_asset_depreciation', AssetDepreciation);
app.use('/api/fa_category', Category);
app.use('/api/fa_group', Group);
app.use('/api/fa_number_group', NumberGroup);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message });
});

app.listen(config.FIXED_ASSET_PORT, () => {
    console.log(
        `Server fixed asset running on port ${config.FIXED_ASSET_PORT}`,
    );
});

module.exports = app;
