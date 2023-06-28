import { generalLedgerApi } from '../';

export const getAllCoas = async () => generalLedgerApi.get("/coa/coasort");
export const getCoaById = async (id:any) => generalLedgerApi.get(`/coa/${id}`);
export const newCoa = async (data: any) => generalLedgerApi.post("/coa", data);
export const updateCoa = async(id:any,data:any) => generalLedgerApi.put(`/coa/${id}`, data)
export const deleteCoa = async (id:any) => generalLedgerApi.delete(`/coa/${id}`)