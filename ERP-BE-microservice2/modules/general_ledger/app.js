const path = require('path');
const dotenvPath = path.join(__dirname, '.env');
require('dotenv').config({ path: dotenvPath });

const express = require('express');
const app = express();
const config = require('../../config/config');
const GlCoaRoutes = require('./app/routes/gl_coa_routes');
const GlCoaGroupRoutes = require('./app/routes/gl_coa_group_routes');
const GlAccountTypeRoutes = require('./app/routes/gl_account_type_routes');
const GlAccountingPeriodRoutes = require('./app/routes/gl_accounting_period_routes');
const GlBudgetControlRoutes = require('./app/routes/gl_budget_control_routes');
const GlJournalRoutes = require('./app/routes/gl_journal_routes');
const GlJournalDetailRoutes = require('./app/routes/gl_journal_detail_routes');
const GlProvideFinancialReportRoutes = require('./app/routes/gl_provide_financial_report_routes');
const GlTransactionTypeRoutes = require('./app/routes/gl_transaction_type_routes');
const GlNumberingRoutes = require('./app/routes/gl_numbering_routes')
const GlRecordExpenseRoutes = require('./app/routes/gl_record_expense_routes')
const GlRecordExpenseDetailRoutes = require('./app/routes/gl_record_expense_detail_routes')
const GlProvideCalculationValueRoutes = require('./app/routes/gl_provide_calculation_value_routes')

const cors = require('cors');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');

// check status env
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

// Main Routes
app.use('/api/coa', GlCoaRoutes);
app.use('/api/coagroup', GlCoaGroupRoutes);
app.use('/api/accounttype', GlAccountTypeRoutes);
app.use('/api/accountingperiod', GlAccountingPeriodRoutes);
app.use('/api/budgetcontrol', GlBudgetControlRoutes);
app.use('/api/journal', GlJournalRoutes);
app.use('/api/journaldetail', GlJournalDetailRoutes);
app.use('/api/transactiontype', GlTransactionTypeRoutes);
app.use('/api/numbering/',GlNumberingRoutes);
app.use('/api/recordexpense',GlRecordExpenseRoutes)
app.use('/api/recordexpensedetail',GlRecordExpenseDetailRoutes)

//Web Service Routes
app.use('/api/glprovidefinancialreport', GlProvideFinancialReportRoutes);
app.use('/api/glprovidecalculationvalue',GlProvideCalculationValueRoutes)


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message });
});

app.listen(config.GENERAL_LEDGER_PORT, () => {
    console.log(
        `Server general ledger running on port ${config.GENERAL_LEDGER_PORT}`,
    );
});

module.exports = app;
