const path = require('path');
const dotenvPath = path.join(__dirname, '.env');
require('dotenv').config({ path: dotenvPath });

const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder for uploaded files

const express = require('express');
const app = express();
const config = require('../../config/config');

const requestHRRoute = require('./app/routes/requestHRRoute');
const departmentRoute = require('./app/routes/departmentRoute');
const positionRoute = require('./app/routes/positionRoute');
const jobRoute = require('./app/routes/jobRoute');
const kartuKeluargaRoute = require('./app/routes/kartuKeluargaRoute');
const familyMemberRoute = require('./app/routes/familyMemberRoute');
const ptkpRoute = require('./app/routes/ptkpRoute');
const scheduleRoute = require('./app/routes/scheduleRoute');
const presenceRoute = require('./app/routes/presenceRoute');
const bukpotRoute = require('./app/routes/bukpotRoute');
const amalRoute = require('./app/routes/amalRoute');
const asuransiRoute = require('./app/routes/asuransiRoute');
const logBookRoute = require('./app/routes/logBookRoute');
const salarySlipRoute = require('./app/routes/salarySlipRoute');
const incomeRoute = require('./app/routes/incomeRoute');
const reductionRoute = require('./app/routes/reductionRoute');
const salaryIncomeRoute = require('./app/routes/salaryIncomeRoute');
const salaryReductionRoute = require('./app/routes/salaryReductionRoute');

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
app.use('/reqHR', requestHRRoute);
app.use('/department', departmentRoute);
app.use('/position', positionRoute);
app.use('/job', jobRoute);
app.use('/kartu-keluarga', kartuKeluargaRoute);
app.use('/family', familyMemberRoute);
app.use('/ptkp', ptkpRoute);
app.use('/schedule', scheduleRoute);
app.use('/presence', presenceRoute);
app.use('/bukpot', bukpotRoute);
app.use('/amal', amalRoute);
app.use('/asuransi', asuransiRoute);
app.use('/log-book', logBookRoute);
app.use('/salary-slip', salarySlipRoute);
app.use('/income', incomeRoute);
app.use('/reduction', reductionRoute);
app.use('/salary-income', salaryIncomeRoute);
app.use('/salary-reduction', salaryReductionRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message });
});

app.listen(config.HUMAN_RESOURCE_MANAGEMENT_PORT, () => {
    console.log(
        `Server main running on port ${config.HUMAN_RESOURCE_MANAGEMENT_PORT}`,
    );
});

module.exports = app;
