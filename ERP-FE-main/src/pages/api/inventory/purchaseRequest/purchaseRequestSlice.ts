import * as purchaseRequestService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllPurchaseRequest = createAsyncThunk(
  'purchaseRequest/fetchAllPurchaseRequest',
  async (_, { rejectWithValue }) => {
    try {
      const response = await purchaseRequestService.getAllPurchaseRequests();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const fetchPurchaseRequest = createAsyncThunk(
  'purchaseRequest/fetchPurchaseRequest',
  async ({ search }: any, { rejectWithValue }) => {
    try {
      const response = await purchaseRequestService.getPurchaseRequestById(
        search,
      );
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const createPurchaseRequest = createAsyncThunk(
  'purchaseRequest/createPurchaseRequest',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await purchaseRequestService.createPurchaseRequest(data);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export interface PurchaseRequestState {
  purchaseRequest: any;
  purchaseRequests: Array<any>;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: PurchaseRequestState = {
  purchaseRequest: null,
  purchaseRequests: [],
  loading: false,
  status: null,
  error: null,
};

const purchaseRequestSlice = createSlice({
  name: 'purchaseRequest',
  initialState,
  reducers: {
    clearState: (state: PurchaseRequestState, action) => {
      state.purchaseRequest = null;
      state.purchaseRequests = [];
      state.loading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllPurchaseRequest.pending, (state, action) => {
      // state.purchaseRequest = null;
      // state.purchaseRequests = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchAllPurchaseRequest.fulfilled, (state, action) => {
      // state.purchaseRequest = null;
      state.purchaseRequests = action.payload.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchAllPurchaseRequest.rejected, (state, action) => {
      state.purchaseRequest = null;
      state.purchaseRequests = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });

    builder.addCase(fetchPurchaseRequest.pending, (state, action) => {
      // state.purchaseRequest= null;
      // state.purchaseRequests = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchPurchaseRequest.fulfilled, (state, action) => {
      state.purchaseRequest = action.payload.data;
      // state.purchaseRequests = [];
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchPurchaseRequest.rejected, (state, action) => {
      // state.purchaseRequest = null;
      // state.purchaseRequests = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });

    builder.addCase(createPurchaseRequest.pending, (state, action) => {
      // state.purchaseRequest= null;
      // state.purchaseRequests = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(createPurchaseRequest.fulfilled, (state, action) => {
      // state.purchaseRequest = action.payload.data;
      // state.purchaseRequests = [];
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(createPurchaseRequest.rejected, (state, action) => {
      state.purchaseRequest = null;
      state.purchaseRequests = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });
  },
});

export default purchaseRequestSlice.reducer;
