const path = require('path');
const dotenvPath = path.join(__dirname, '.env');
require('dotenv').config({ path: dotenvPath });

const express = require('express');
const app = express();
const config = require('../../config/config');

//manufacturing routes
const workcentreRoute = require('./app/routes/mf_workcentreRoute');
const machineRoute = require('./app/routes/mf_machineRoute');
const productionRequestRoute = require('./app/routes/mf_productionRequestRoute');
const masterOperationRoute = require('./app/routes/mf_masterOperationRoute');
const productionOrderRoute = require('./app/routes/mf_productionOrderRoute');
const receiveProductRoute = require('./app/routes/mf_receiveProductRoute');
const issueMaterianlRoute = require('./app/routes/mf_issueMaterialRoute');
const inspectionProductRoute = require('./app/routes/mf_inspectionProductRoute');
const transferOrderRoute = require('./app/routes/mf_transferOrderRoute');
const manSkillRoute = require('./app/routes/mf_manSkillRoutes');
const manRoute = require('./app/routes/mf_manRoute');
const jobOrderRoute = require('./app/routes/mf_jobOrderRoute');
const machineUsageRoute = require('./app/routes/mf_machineUsageRoute');
const masterRoutingRoute = require('./app/routes/mf_masterRoutingRoute');
const costAccountingRoute = require('./app/routes/mf_costAccountingRoute');

const cors = require('cors');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');

// check status env
console.log(config.PORT);
//console.log('Current configuration:', config.development);

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

//manufacturing routes
app.use('/api/workcentre', workcentreRoute);
app.use('/api/machine', machineRoute);
app.use('/api/production_request', productionRequestRoute);
app.use('/api/operation', masterOperationRoute);
app.use('/api/production_order', productionOrderRoute);
app.use('/api/receive_product', receiveProductRoute);
app.use('/api/issue_material', issueMaterianlRoute);
app.use('/api/inspection_product', inspectionProductRoute);
app.use('/api/transfer_order', transferOrderRoute);
app.use('/api/man_skill', manSkillRoute);
app.use('/api/man', manRoute);
app.use('/api/job_order', jobOrderRoute);
app.use('/api/machine_usage', machineUsageRoute);
app.use('/api/routing', masterRoutingRoute);
app.use('/api/cost_accounting', costAccountingRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message });
});

app.listen(config.MANUFACTURING_PORT, () => {
    console.log(
        `Server manufacturing running on port ${config.MANUFACTURING_PORT}`,
    );
});

module.exports = app;
