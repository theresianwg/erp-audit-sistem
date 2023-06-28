import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as currencyService from './index';

export const fetchAllCurrencies = createAsyncThunk(
  'currencies/fetchAllCurrencies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await currencyService.getAllCurrencies();
      return response.data;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const searchCurrencies = createAsyncThunk(
  'currencies/searchCurrencies',
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await currencyService.searchCurrencies(query);
      return response.data;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

interface Currency {
  id: string;
  name: string;
  symbol: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CurrencyState {
  currencies: Currency[];
  loading: boolean;
  error: any;
}

const initialState: CurrencyState = {
  currencies: [],
  loading: false,
  error: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    clearState: state => {
      state.currencies = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAllCurrencies.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAllCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchAllCurrencies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(searchCurrencies.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(searchCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(searchCurrencies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // Tambahkan extra reducers untuk action lainnya sesuai kebutuhan
  },
});

export const { clearState } = currencySlice.actions;

export default currencySlice.reducer;
