import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as dpInvoiceService from './index';

export const fetchAllDpInvoices = createAsyncThunk(
  'dpInvoices/fetchAllDpInvoices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await dpInvoiceService.getAllDpInvoices();
      return response.data.result;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const newDpInvoice = createAsyncThunk(
  'dpInvoices/newDpInvoice',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await dpInvoiceService.newDpInvoice(data);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const updateDpInvoice = createAsyncThunk(
  'dpInvoices/updateDpInvoice',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await dpInvoiceService.updateDpInvoice(data);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const deleteDpInvoice = createAsyncThunk(
  'dpInvoices/deleteDpInvoice',
  async (id: any, { rejectWithValue }) => {
    try {
      const response = await dpInvoiceService.deleteDpInvoice(id);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

interface DpInvoice {
  id: string;
  invoice_number: string;
  invoice_date: string;
  // Definisikan properti lainnya sesuai kebutuhan
}

export interface PurchaseDownPaymentInvoiceState {
  dpInvoices: DpInvoice[];
  loading: boolean;
  error: any;
}

const initialState: PurchaseDownPaymentInvoiceState = {
  dpInvoices: [],
  loading: false,
  error: null,
};

const purchaseDownPaymentInvoiceSlice = createSlice({
  name: 'purchaseDownPaymentInvoice',
  initialState,
  reducers: {
    clearState: state => {
      state.dpInvoices = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAllDpInvoices.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAllDpInvoices.fulfilled, (state, action) => {
      state.dpInvoices = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchAllDpInvoices.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // Tambahkan extra reducers untuk action lainnya sesuai kebutuhan
  },
});

export const { clearState } = purchaseDownPaymentInvoiceSlice.actions;

export default purchaseDownPaymentInvoiceSlice.reducer;
