const GlJournalRepository = require('../repositories/gl_journal_repository');
const GlJournalDetailRepository = require('../repositories/gl_journal_detail_repository')

//utils
const { generateJournalCode } = require('../utils/gl_generate_id_utils')

//Module Services
const apPurchaseInvoiceService = require('../../../account_payable/app/services/ap_purchase_invoice_service')
const mfCostAccountingService = require('../../../manufacturing/app/services/mf_costAccountingService')


class GlJournalService {
    async createJournal(data) {
        return await GlJournalRepository.createJournal(data);
    }
    async updateJournal(id, data) {
        return await GlJournalRepository.updateJournal(id, data);
    }
    async deleteJournal(id) {
        return await GlJournalRepository.deleteJournal(id);
    }
    async getJournalByCode(code) {
        return await GlJournalRepository.getJournalByCode(code);
    }
    async getJournalById(id) {
        return await GlJournalRepository.getJournalById(id);
    }
    async getLastJournal() {
        return await GlJournalRepository.getLastJournal();
    }
    async getAllJournal() {
        return await GlJournalRepository.getAllJournal();
    }
    async getAllJournalSort() {
        return await GlJournalRepository.getAllJournalSort();
    }
    //Secondary
    async getAllJournalDetailByJournal(Journal_Code) {
        return await GlJournalRepository.getAllJournalDetailByJournal(Journal_Code)
    }
    async getJournalByDate(start_date,end_date){
        return await GlJournalRepository.getJournalByDate(start_date,end_date)
    }

    // Third Service
    async createJournalandJournalDetailThroughPurchaceInvoice(tax_include){
        const LastJournal = await GlJournalRepository.getLastJournal()
        // console.log("last journal",LastJournal)
        const dataPI = await apPurchaseInvoiceService.findLatest()
        let Journal_Code = await generateJournalCode()
        // console.log("JournalCode",Journal_Code)
        const dataJournal = {
            Journal_Code: Journal_Code,
            Journal_Ref: dataPI.dataValues.id,
            Journal_Post_Date: dataPI.dataValues.invoice_date,
            Journal_Notes: dataPI.dataValues.description,
            Journal_Amount: dataPI.dataValues.total_amount,
            id_accounting_period: 1,
            id_numbering: 10
        }
        const dataPODetails = dataPI.dataValues.purchase_order.dataValues.InPurchaseOrderDetails
        // console.log(dataPODetails)
        const dataJournalDetails = []
        // let 
        for(let i = 0 ; i < Object.keys(dataPODetails).length; i++){
            // console.log(dataPODetails[i].dataValues)
            const Item = dataPODetails[i].dataValues.InItem.dataValues
            const dataJD= {
                JD_Credit:0,
                JD_Credit_Curr:0,
                JD_Debit:dataPODetails[i].dataValues.price,
                JD_Debit_Curr:dataPODetails[i].dataValues.price,
                id_coa:Item.id_coa,
                id_journal: LastJournal.dataValues.id + 1
            }
            dataJournalDetails.push(dataJD)
        }
        const dataPO = dataPI.dataValues.purchase_order.dataValues
        if(tax_include){
            const dataJDTax = {
                JD_Credit:dataPO.total_tax,
                JD_Credit_Curr:dataPO.total_tax,
                JD_Debit:0,
                JD_Debit_Curr:0,
                id_coa: 27,
                id_journal: LastJournal.dataValues.id + 1
            }
            dataJournalDetails.push(dataJDTax)
        }
        const dataJDKasBank = {
            JD_Credit:dataPO.total_price,
            JD_Credit_Curr:dataPO.total_price,
            JD_Debit:0,
            JD_Debit_Curr:0,
            id_coa: 2,
            id_journal: LastJournal.dataValues.id + 1
        }
        dataJournalDetails.push(dataJDKasBank)
        console.log(dataJournalDetails)
        return await GlJournalRepository.createJournal(dataJournal) && await GlJournalDetailRepository.createJournalDetail(dataJournalDetails)
    } 

    
    async createJournalandJournalDetailThroughManufactureCOGS(){
        const LastJournal = await GlJournalRepository.getLastJournal()
        const dataCOGS = await mfCostAccountingService.getLatest()
        let Journal_Code = await generateJournalCode()
        const dataJournal = {
            Journal_Code: Journal_Code,
            Journal_Ref: dataCOGS.dataValues.id,
            Journal_Post_Date: dataCOGS.dataValues.MfProductionOrder.dataValues.po_start,
            Journal_Notes: "COGS",
            Journal_Amount: dataCOGS.dataValues.total_cost,
            id_accounting_period: 1,
            id_numbering: 21
        }
        const dataJournalDetail = {
            JD_Credit:0,
            JD_Credit_Curr:0,
            JD_Debit:dataCOGS.dataValues.total_cost,
            JD_Debit_Curr:dataCOGS.dataValues.total_cost,
            id_coa: 37,
            id_journal: LastJournal.dataValues.id + 1
        }
        await GlJournalRepository.createJournal(dataJournal)
        await GlJournalDetailRepository.createJournalDetailSingle(dataJournalDetail)
    }
}
module.exports = new GlJournalService();
