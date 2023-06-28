import { generalLedgerApi } from '../';

export const getAllCoaGroups = async () => generalLedgerApi.get("/coagroup/coagroupsort");
export const newCoaGroup = async (data: any) => generalLedgerApi.post("/coagroup", data);
export const updateCoaGroup = async(data: any) => generalLedgerApi.put("/coagroup/:coagroupid", data)
export const deleteCoaGroup = async (id: string) => generalLedgerApi.delete("/coagroup/"+ id)