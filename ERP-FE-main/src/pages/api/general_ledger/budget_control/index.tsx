import {generalLedgerApi} from "../";

export const getAllBudgetControl = async () => generalLedgerApi.get("/budgetcontrol");
export const newBudgetControl = async (data: any) => generalLedgerApi.post("/budgetcontrol", data);