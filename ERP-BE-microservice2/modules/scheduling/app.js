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

const ScheduleRoute = require('./app/routes/s_schedule_route');
const JodDummyRoute = require('./app/routes/jod_dummy_routes');
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

// ScheduleRoute Asset Routes
app.use('/api/schedule', ScheduleRoute);
app.use('/api/jod_dummy', JodDummyRoute);
app.listen(config.SCHEDULING_PORT, () => {
    console.log(`Server scheduling running on port ${config.SCHEDULING_PORT}`);
});

app.listen();
