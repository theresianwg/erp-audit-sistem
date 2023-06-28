import {generalLedgerApi} from "../";

export const getAllJournals = async () => generalLedgerApi.get("/journal/journalsort");
export const getAllJournalDetailByJournal = async (data:any) => generalLedgerApi.get(`/journal/getjournaldetail/${data}`);
export const newJournal = async (data: any) => generalLedgerApi.post("/journal", data);
// export const updateCoaGroup = async(data: any) => generalLedgerApi.put("/coagroup/:coagroupid", data)
// export const deleteCoaGroup = async (id: string) => generalLedgerApi.delete("/coagroup/"+ id)