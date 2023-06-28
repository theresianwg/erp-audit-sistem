import {generalLedgerApi} from "../";

export const getAllJournalDetails = async () => generalLedgerApi.get("/journaldetail");
export const newJournalDetail = async (data:any) => generalLedgerApi.post("/journaldetail",data);
