import coaSlice from "./coa/coaSlice";
import coaGroupSlice from "./coa_group/coaGroupSlice";
import accountTypeSlice from "./account_type/accountTypeSlice";
import journalSlice from './journal/journalSlice';
import journaDetailSlice from './journal_detail/journalDetailSlice';
import transactionTypeSlice from "./transaction_type/transactionTypeSlice";
import budgetControlSlice from "./budget_control/budgetControlSlice";
import numberingSlice from "./numbering/numberingSlice";
export const allGeneralLedgerStore = {
    coas: coaSlice,
    coagroups: coaGroupSlice,
    accounttypes: accountTypeSlice,
    journals: journalSlice,
    journaldetails: journaDetailSlice,
    transactiontypes:transactionTypeSlice,
    budgetcontrols:budgetControlSlice,
    numberings:numberingSlice,
}
