import {generalLedgerApi} from "../";

export const generateBalanceSheet = async () => generalLedgerApi.get("/glprovidefinancialreport/generatebalancesheet");