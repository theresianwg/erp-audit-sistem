import * as customerService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllCustomers = createAsyncThunk(
  'customer/fetchAllCustomers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await customerService.getAllCustomers();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const fetchCustomer = createAsyncThunk(
  'customer/fetchCustomer',
  async ({ search }: any, { rejectWithValue }) => {
    try {
      const response = await customerService.getCustomerById(search);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export interface CustomerState {
  customer: any;
  customers: Array<any>;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: CustomerState = {
  customer: null,
  customers: [],
  loading: false,
  status: null,
  error: null,
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    clearState: (state: CustomerState, action) => {
      state.customer = null;
      state.customers = [];
      state.loading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllCustomers.pending, (state, action) => {
      // state.customer= null;
      // state.customers = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchAllCustomers.fulfilled, (state, action) => {
      // state.customer = null;
      state.customers = action.payload.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchAllCustomers.rejected, (state, action) => {
      state.customer = null;
      state.customers = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });

    builder.addCase(fetchCustomer.pending, (state, action) => {
      // state.customer= [];
      // state.customers = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchCustomer.fulfilled, (state, action) => {
      state.customer = action.payload.data;
      // state.customers = [];
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchCustomer.rejected, (state, action) => {
      state.customer = null;
      state.customers = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });
  },
});

export default customerSlice.reducer;
