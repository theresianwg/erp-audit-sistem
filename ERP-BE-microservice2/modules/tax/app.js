const path = require('path');
const dotenvPath = path.join(__dirname, '.env');
require('dotenv').config({ path: dotenvPath });

const express = require('express');
const app = express();
const config = require('../../config/config');
const companyRoutes = require('./app/routes/companyRoute');
const permissionRoutes = require('./app/routes/permissionRoute');
const roleRoutes = require('./app/routes/roleRoute');
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

// Main Routes
app.use('/company', companyRoutes);
app.use('/permission', permissionRoutes);
app.use('/roles', roleRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message });
});

app.listen(config.MAIN_PORT, () => {
    console.log(`Server main running on port ${config.MAIN_PORT}`);
});

module.exports = app;
