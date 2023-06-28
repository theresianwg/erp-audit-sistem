import * as jobOrder from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllJobOrders = createAsyncThunk(
  'salesOrders/fetchAllJobOrders',
  async (_, { rejectWithValue }) => {
    try {
      const response = await jobOrder.getAllSalesOrders();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const fetchJobOrderDetails = createAsyncThunk(
  'salesOrders/fetchJobOrderDetails',
  async ({ search }: any, { rejectWithValue }) => {
    try {
      const response = await jobOrder.getSalesOrderById(search);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

// export const createSalesOrder = createAsyncThunk(
//   'salesOrders/createSalesOrder',
//   async (data: any, { rejectWithValue }) => {
//     try {
//       const response = await jobOrder.createSalesOrder(data);
//       return response;
//     } catch (error: any) {
//       throw rejectWithValue(error);
//     }
//   },
// );

export interface JobOrdersState {
  jobOrder: any;
  jobOrders: Array<any>;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: JobOrdersState = {
  jobOrder: null,
  jobOrders: [],
  loading: false,
  status: null,
  error: null,
};

const jobOrderSlice = createSlice({
  name: 'jobOrders',
  initialState,
  reducers: {
    clearState: (state: JobOrdersState, action) => {
      state.jobOrder = null;
      state.jobOrders = [];
      state.loading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllJobOrders.pending, (state, action) => {
      // state.jobOrder= null;
      // state.jobOrders = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchAllJobOrders.fulfilled, (state, action) => {
      // state.jobOrder = null;
      state.jobOrders = action.payload.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchAllJobOrders.rejected, (state, action) => {
      state.jobOrder = null;
      state.jobOrders = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });

    builder.addCase(fetchJobOrderDetails.pending, (state, action) => {
      // state.jobOrder= null;
      // state.jobOrders = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchJobOrderDetails.fulfilled, (state, action) => {
      state.jobOrder = action.payload.data;
      // state.jobOrders = [];
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchJobOrderDetails.rejected, (state, action) => {
      state.jobOrder = null;
      state.jobOrders = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });

    // builder.addCase(createSalesOrder.pending, (state, action) => {
    //   state.loading = true;
    //   state.status = 'pending';
    //   state.error = null;
    // });
    // builder.addCase(createSalesOrder.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.status = 'success';
    //   state.error = null;
    // });
    // builder.addCase(createSalesOrder.rejected, (state, action) => {
    //   state.loading = false;
    //   state.status = 'failed';
    //   state.error = action.error;
    // });
  },
});

export default jobOrderSlice.reducer;
