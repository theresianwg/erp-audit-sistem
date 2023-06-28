const path = require('path');
const dotenvPath = path.join(__dirname, '.env');
require('dotenv').config({ path: dotenvPath });

const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder for uploaded files

const express = require('express');
const app = express();
const config = require('../../config/config');

const ABCPerMonthRoute = require('./app/routes/ABCPerMonthRoute');
const ABCPerItemRoute = require('./app/routes/ABCPerItemRoute');
const JobOrderCostingRoute = require('./app/routes/JobOrderCostingRoute');

const cors = require('cors');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');

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

// Routes
app.use('/abc-per-month', ABCPerMonthRoute);
app.use('/abc-per-item', ABCPerItemRoute);
app.use('/job-order-costing', JobOrderCostingRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message });
});

app.listen(config.COST_OF_GOODS_SOLD, () => {
    console.log(
        `Server main running on port ${config.COST_OF_GOODS_SOLD}`,
    );
});

module.exports = app;
