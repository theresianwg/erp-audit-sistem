import {
  combineReducers,
  configureStore,
  Action,
  ThunkAction,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import coaSlice from './general_ledger/coa/coaSlice';
// import coaGroupSlice from './general_ledger/coa_group/coaGroupSlice';
// import accountTypeSlice from './general_ledger/account_type/accountTypeSlice';
import { allInventoryStore } from './inventory/inventoryStore';
import { allGeneralLedgerStore } from './general_ledger/generalLedgerStore';
import { allAccountPayableStore } from './account_payable/accountPayableStore';
import { allCashBankStore } from './cash_bank/cashBankStore';
import { allManufacturingStore } from './manufacturing/manufacturingStore';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  // Add reducers here
  ...allInventoryStore,
  ...allGeneralLedgerStore,
  ...allAccountPayableStore,
  ...allCashBankStore,
  ...allManufacturingStore,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
