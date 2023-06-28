const GlFinancialReportASL = require('../Application_Service_Layer/gl_financial_report_asl');
const {ProvideBalanceSheetReportUtil} = require('../../utils/gl_generate_financial_report_utils')
class GlProvideFinancialReport {
    async ProvideCashFlowReport(req, res) {
        try {
            const { intNumber, listGroupAmountDTO, bigDecNumber, stringWord } =
                req.body;
            GlFinancialReportASL.generateCashFlowReport(
                intNumber,
                listGroupAmountDTO,
                bigDecNumber,
            );
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message,
            });
        }
    }
    async BalanceSheetReportGenerate(req,res){
        try{
            const {
                id_accounting_period,
                title_balance_sheet,
                company_name,
                periode_name,
            } = req.body;
            //balance sheet data ngikutin GlGroupAmountDTO
            let balance_sheet_data =
                await GlFinancialReportASL.getBalanceSheetData(
                    id_accounting_period,
                );
            if (!balance_sheet_data) {
                res.status(404).json({
                    message: 'Balance Sheet Data not found',
                });
                return;
            }
            let currentAssets = [];
            let fixedAssets = [];
            let currentLiabilities = [];
            let longTermLiabilities = [];
            let equity = []
            let TotalCurrentAsset = 0
            let TotalFixedAsset = 0
            let TotalCurrentLiabilities = 0
            let TotalLongTermLiabilities = 0
            let TotalEquity = 0
            for (let i = 0; i < Object.keys(balance_sheet_data).length; i++) {
                const datas = balance_sheet_data[i];
                Object.keys(datas).forEach(function (key, index) {
                    const data = datas[key];
                    if (data.Coa_Parent_Name == 'Kas & Bank') {
                        currentAssets.push({
                            coa_number: data.Coa_Number,
                            item: data.Coa_Name,
                            amount: data.Debit - data.Credit
                        })
                        TotalCurrentAsset = TotalCurrentAsset + (data.Debit - data.Credit)
                    }
                    else if(data.Coa_Parent_Name == "Liabilitas Jangka Pendek") {
                        currentLiabilities.push({
                            coa_number: data.Coa_Number,
                            item: data.Coa_Name,
                            amount: data.Debit - data.Credit
                        })
                        TotalCurrentLiabilities = TotalCurrentLiabilities + (data.Debit - data.Credit)
                    }
                    else if(data.Coa_Parent_Name == "Equity") {
                        equity.push({
                            coa_number: data.Coa_Number,
                            item: data.Coa_Name,
                            amount: data.Debit - data.Credit
                        })
                        TotalEquity = TotalEquity + (data.Debit - data.Credit)
                    }
                });
            }
            currentAssets.sort(function(a, b) {return a.coa_number - b.coa_number})
            currentLiabilities.sort(function(a, b) {return a.coa_number - b.coa_number})
            equity.sort(function(a, b) {return a.coa_number - b.coa_number})
            for(let i = 0; i < currentLiabilities.length; i++){
                if(i > 0 && currentLiabilities[i-1].item == currentLiabilities[i].item){
                    currentLiabilities[i].amount += currentLiabilities[i-1].amount
                    currentLiabilities.shift()
                    i--
                }
            }
            for(let i = 0; i < currentAssets.length; i++){
                if(i > 0 && currentAssets[i-1].item == currentAssets[i].item){
                    currentAssets[i].amount += currentAssets[i-1].amount
                    currentAssets.shift()
                    i--
                }
            }
            for(let i = 0; i < equity.length; i++){
                if(i > 0 && equity[i-1].item == equity[i].item){
                    equity[i].amount += equity[i-1].amount
                    equity.shift()
                    i--
                }
            }
        }catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message,
            });
        }
    }
    async ProvideBalanceSheetReport(req, res) {
        try {
            const {
                id_accounting_period,
                title_balance_sheet,
                company_name,
                periode_name,
            } = req.body;
            //balance sheet data ngikutin GlGroupAmountDTO
            let balance_sheet_data =
                await GlFinancialReportASL.getBalanceSheetData(
                    id_accounting_period,
                );
            if (!balance_sheet_data) {
                res.status(404).json({
                    message: 'Balance Sheet Data not found',
                });
                return;
            }
            console.log(balance_sheet_data)
            console.log('------------------------------------\n');
            const pdfBuffer = await ProvideBalanceSheetReportUtil(
                balance_sheet_data,
                title_balance_sheet,
                company_name,
                periode_name,
            );
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader(
                'Content-Disposition',
                `attachment; filename=Balance_Sheet_${periode_name}.pdf`,
            );

            res.end(pdfBuffer);
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message,
            });
        }
    }
    async ProvideProfitAndLossReport(req,res){
        try{
            const {id_accounting_period, title_income_statement, company_name, periode_name} = req.body
            let income_statement_data = await GlFinancialReportASL.getProfitAndLossData(id_accounting_period)
            if (!income_statement_data) {
                res.status(404).json({ message: 'Income Statement Data not found' });
                return;
            }
            // console.log('------------------------------------\n');
            // const pdfBuffer = await ProvideBalanceSheetReportUtil(balance_sheet_data,title_balance_sheet, company_name, periode_name)
            // res.setHeader('Content-Type', 'application/pdf');
            // res.setHeader(
            //     'Content-Disposition',
            //     `attachment; filename=Balance_Sheet_${periode_name}.pdf`,
            // );
            // res.end(pdfBuffer);
        }catch(err){
            return res.status(500).json({
                status: 'error',
                message: err.message,
            });
        }
    }
    async ProvideTrialBalance(req,res){
        try{
            const {id_accounting_period, trial_balance, company_name, periode_name} = req.body
        }catch(err){
            return res.status(500).json({
                status: 'error',
                message: err.message,
            });
        }
    }
}

module.exports = new GlProvideFinancialReport();
