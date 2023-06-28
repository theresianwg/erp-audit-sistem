import * as bomService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchBom = createAsyncThunk(
  'bom/fetchBom',
  async ({ search }: any, { rejectWithValue }) => {
    try {
      const response = await bomService.getBomById(search);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export interface BomState {
  bom: any;
  boms: Array<any>;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: BomState = {
  bom: null,
  boms: [],
  loading: false,
  status: null,
  error: null,
};

const bomSlice = createSlice({
  name: 'bom',
  initialState,
  reducers: {
    clearState: (state: BomState, action) => {
      state.bom = null;
      state.boms = [];
      state.loading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBom.pending, (state, action) => {
      // state.purchaseRequest= [];
      // state.purchaseRequests = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchBom.fulfilled, (state, action) => {
      state.bom = action.payload.data;
      // state.purchaseRequests = [];
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchBom.rejected, (state, action) => {
      // state.purchaseRequest = [];
      // state.purchaseRequests = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });
  },
});

export default bomSlice.reducer;
