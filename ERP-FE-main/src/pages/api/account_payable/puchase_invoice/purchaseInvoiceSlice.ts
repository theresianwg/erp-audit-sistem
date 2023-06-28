import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as invoiceService from './index';

export const fetchAllInvoices = createAsyncThunk(
  'invoices/fetchAllInvoices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await invoiceService.getAllInvoices();
      return response.data.result;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const newInvoice = createAsyncThunk(
  'invoices/newInvoice',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await invoiceService.newInvoice(data);
      return response.data;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const updateInvoice = createAsyncThunk(
  'invoices/updateInvoice',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await invoiceService.updateInvoice(data);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const deleteInvoice = createAsyncThunk(
  'invoices/deleteInvoice',
  async (id: any, { rejectWithValue }) => {
    try {
      const response = await invoiceService.deleteInvoice(id);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

interface Invoice {
  id: string;
  invoice_number: string;
  invoice_date: Date;
  due_date: Date;
  total_amount: number;
  total_taxes: number;
  total_price_item: number;
  discounts: number;
  received_date: Date;
  purchase_order_id: string;
  payment_status: 'pending' | 'cancelled' | 'verified' | 'succeeded';
  purchase_down_payment_invoice_id: string;
  description: string;
  taxes_included: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface PurchaseInvoiceState {
  invoices: Invoice[];
  loading: boolean;
  error: any;
}

const initialState: PurchaseInvoiceState = {
  invoices: [],
  loading: false,
  error: null,
};

const purchaseInvoiceSlice = createSlice({
  name: 'purchaseInvoice',
  initialState,
  reducers: {
    clearState: state => {
      state.invoices = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAllInvoices.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAllInvoices.fulfilled, (state, action) => {
      state.invoices = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchAllInvoices.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Reducer tambahan untuk newInvoice
    builder.addCase(newInvoice.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(newInvoice.fulfilled, (state, { payload }) => {
      state.loading = false;
      // Menambahkan invoice baru ke state
      state.invoices.push(payload);
    });
    builder.addCase(newInvoice.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });

    // Tambahkan extra reducers untuk action lainnya sesuai kebutuhan
  },
});

export const { clearState } = purchaseInvoiceSlice.actions;

export default purchaseInvoiceSlice.reducer;
