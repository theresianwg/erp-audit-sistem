import {generalLedgerApi} from "../";

export const getAllTransactionTypes = async () => generalLedgerApi.get("/transactiontype");
export const newTransactionType = async (data:any) => generalLedgerApi.post("/transactiontype",data);