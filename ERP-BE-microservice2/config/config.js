require('dotenv').config();

const MAIN_PORT = process.env.MAIN_PORT || 3000;
const INVENTORY_PORT = process.env.INVENTORY_PORT || 3001;
const MANUFACTURING_PORT = process.env.MANUFACTURING_PORT || 3002;
const GENERAL_LEDGER_PORT = process.env.GENERAL_LEDGER_PORT || 3003;
const ACCOUNT_PAYABLE_PORT = process.env.ACCOUNT_PAYABLE_PORT || 3011;
const ACCOUNT_RECEIVABLE_PORT = process.env.ACCOUNT_RECEIVABLE_PORT || 3012;
const CASH_BANK_PORT = process.env.CASH_BANK_PORT || 3013;
const HUMAN_RESOURCE_MANAGEMENT_PORT =
    process.env.HUMAN_RESOURCE_MANAGEMENT_PORT || 3014;
const TAXES_PORT = process.env.TAXES_PORT || 3017;
const FIXED_ASSET_PORT = process.env.FIXED_ASSET_PORT || 3015;
const SCHEDULING_PORT = process.env.SCHEDULING_PORT || 3016;

module.exports = {
    MAIN_PORT,
    INVENTORY_PORT,
    MANUFACTURING_PORT,
    GENERAL_LEDGER_PORT,
    ACCOUNT_PAYABLE_PORT,
    ACCOUNT_RECEIVABLE_PORT,
    CASH_BANK_PORT,
    HUMAN_RESOURCE_MANAGEMENT_PORT,
    TAXES_PORT,
    FIXED_ASSET_PORT,
    SCHEDULING_PORT,
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            dateStrings: true,
            typeCast: true,
        },
        timezone: '+07:00', // Set timezone to 'Asia/Jakarta'
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        dialectOptions: {
            dateStrings: true,
            typeCast: true,
        },
        timezone: '+07:00', // Set timezone to 'Asia/Jakarta'
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        dialectOptions: {
            dateStrings: true,
            typeCast: true,
        },
        timezone: '+07:00', // Set timezone to 'Asia/Jakarta'
    },
};
