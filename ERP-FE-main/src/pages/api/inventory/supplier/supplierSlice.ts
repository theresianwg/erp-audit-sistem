import * as supplierService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllSuppliers = createAsyncThunk(
  'supplier/fetchAllSuppliers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await supplierService.getAllSuppliers();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const fetchSupplier = createAsyncThunk(
  'supplier/fetchSupplier',
  async ({ search }: any, { rejectWithValue }) => {
    try {
      const response = await supplierService.getSupplierById(search);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export interface SupplierState {
  supplier: any;
  suppliers: Array<any>;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: SupplierState = {
  supplier: null,
  suppliers: [],
  loading: false,
  status: null,
  error: null,
};

const supplierSlice = createSlice({
  name: 'supplier',
  initialState,
  reducers: {
    clearState: (state: SupplierState, action) => {
      state.supplier = null;
      state.suppliers = [];
      state.loading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllSuppliers.pending, (state, action) => {
      state.supplier = null;
      state.suppliers = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchAllSuppliers.fulfilled, (state, action) => {
      state.supplier = null;
      state.suppliers = action.payload.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchAllSuppliers.rejected, (state, action) => {
      state.supplier = null;
      state.suppliers = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });

    builder.addCase(fetchSupplier.pending, (state, action) => {
      state.supplier = null;
      state.suppliers = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchSupplier.fulfilled, (state, action) => {
      state.supplier = action.payload.data;
      state.suppliers = [];
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchSupplier.rejected, (state, action) => {
      state.supplier = null;
      state.suppliers = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });
  },
});

export default supplierSlice.reducer;
