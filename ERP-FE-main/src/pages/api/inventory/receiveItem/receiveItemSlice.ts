import * as receiveItemService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllReceiveItems = createAsyncThunk(
  'receiveItem/fetchAllReceiveItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await receiveItemService.getAllReceiveItems();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const fetchReceiveItem = createAsyncThunk(
  'receiveItem/fetchReceiveItem',
  async ({ search }: any, { rejectWithValue }) => {
    try {
      const response = await receiveItemService.getReceiveItemById(search);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const createReceiveItem = createAsyncThunk(
  'purchaseRequest/createReceiveItem',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await receiveItemService.createReceiveItem(data);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export interface ReceiveItemState {
  receiveItem: any;
  receiveItems: Array<any>;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: ReceiveItemState = {
  receiveItem: null,
  receiveItems: [],
  loading: false,
  status: null,
  error: null,
};

const receiveItemSlice = createSlice({
  name: 'receiveItem',
  initialState,
  reducers: {
    clearState: (state: ReceiveItemState, action) => {
      state.receiveItem = null;
      state.receiveItems = [];
      state.loading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllReceiveItems.pending, (state, action) => {
      // state.receiveItem= null;
      // state.receiveItems = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchAllReceiveItems.fulfilled, (state, action) => {
      // state.receiveItem = null;
      state.receiveItems = action.payload.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchAllReceiveItems.rejected, (state, action) => {
      // state.receiveItem = null;
      // state.receiveItems = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });

    builder.addCase(fetchReceiveItem.pending, (state, action) => {
      // state.receiveItem= [];
      // state.receiveItems = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchReceiveItem.fulfilled, (state, action) => {
      state.receiveItem = action.payload.data;
      // state.receiveItems = [];
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchReceiveItem.rejected, (state, action) => {
      state.receiveItem = {};
      state.receiveItems = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });

    builder.addCase(createReceiveItem.pending, (state, action) => {
      // state.receiveItem= null;
      // state.receiveItems = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(createReceiveItem.fulfilled, (state, action) => {
      // state.receiveItem = action.payload.data;
      // state.receiveItems = [];
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(createReceiveItem.rejected, (state, action) => {
      // state.receiveItem = null;
      // state.receiveItems = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });
  },
});

export default receiveItemSlice.reducer;
