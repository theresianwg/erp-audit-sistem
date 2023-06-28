import {generalLedgerApi} from "../";

export const getAllNumberings = async () => generalLedgerApi.get("/numbering");
export const newNumbering = async (data:any) => generalLedgerApi.post("/numbering",data);