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

const inBomRoutes = require('./app/routers/bomRoute');
const inInventoryRoutes = require('./app/routers/inventoryRoute');
const inItemRoutes = require('./app/routers/itemRoute');
const inPurchaseOrderRoutes = require('./app/routers/purchaseOrderRoute');
const inPurchaseRequestRoutes = require('./app/routers/purchaseRequestRoute');
const inSalesOrderRoutes = require('./app/routers/salesOrderRoute');
const inTransferToCustomer = require('./app/routers/transferToCustomer');
const inTransferToInventory = require('./app/routers/transferToInventoryRoute');
const inReceiveItemRoutes = require('./app/routers/receiveItemRoute');
const inUnaprovedItemRoutes = require('./app/routers/unaprovedItemRoute');
const inSupplierRoutes = require('./app/routers/supplierRoute');
const InCustomerRoutes = require('./app/routers/customerRoute');
const inDelayedProductionRoutes = require('./app/routers/delayedProductionRoute');
const inSaveStorageRoutes = require('./app/routers/saveStroageRoute');

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

// Inventory Routes
app.use('/api/in_bom', inBomRoutes);
app.use('/api/in_inventory', inInventoryRoutes);
app.use('/api/in_item', inItemRoutes);
app.use('/api/in_purchase_order', inPurchaseOrderRoutes);
app.use('/api/in_purchase_request', inPurchaseRequestRoutes);
app.use('/api/in_sales_order', inSalesOrderRoutes);
app.use('/api/in_tf_cust', inTransferToCustomer);
app.use('/api/in_tf_invent', inTransferToInventory);
app.use('/api/in_receive_item', inReceiveItemRoutes);
app.use('/api/in_unapproved_item', inUnaprovedItemRoutes);
app.use('/api/in_supplier', inSupplierRoutes);
app.use('/api/in_customer', InCustomerRoutes);
app.use('/api/in_delayed_production', inDelayedProductionRoutes);
app.use('/api/in_save_storage', inSaveStorageRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message });
});

app.listen(config.INVENTORY_PORT, () => {
    console.log(`Server inventory running on port ${config.INVENTORY_PORT}`);
});

module.exports = app;
