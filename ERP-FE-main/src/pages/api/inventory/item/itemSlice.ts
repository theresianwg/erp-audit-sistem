import * as itemService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllItems = createAsyncThunk(
  'items/fetchAllItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await itemService.getAllItems();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const fetchAllEndProducts = createAsyncThunk(
  'items/fetchAllEndProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await itemService.getAllEndProducts();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const newItem = createAsyncThunk(
  'items/newItem',
  async (data: any, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await itemService.newItem(data);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const getItemById = createAsyncThunk(
  'items/getItemById',
  async ({ search }: any, { rejectWithValue }) => {
    try {
      const response = await itemService.getItemById(search);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export interface ItemsState {
  item: any;
  items: Array<any>;
  endProducts: Array<any>;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: ItemsState = {
  item: null,
  items: [],
  endProducts: [],
  loading: false,
  status: null,
  error: null,
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    clearState: (state: ItemsState, action) => {
      state.item = null;
      state.items = [];
      state.loading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllItems.pending, (state, action) => {
      // state.item= null;
      // state.items = [];
      state.loading = true;
      state.status = null;
      state.error = null;
    });
    builder.addCase(fetchAllItems.fulfilled, (state, action) => {
      // state.item= null;
      state.items = action.payload.data.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchAllItems.rejected, (state, action) => {
      state.item = null;
      state.items = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error.message;
    });

    builder.addCase(fetchAllEndProducts.pending, (state, action) => {
      // state.item= null;
      // state.items = [];
      state.loading = true;
      state.status = null;
      state.error = null;
    });
    builder.addCase(fetchAllEndProducts.fulfilled, (state, action) => {
      // state.item= null;
      state.endProducts = action.payload.data.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchAllEndProducts.rejected, (state, action) => {
      state.item = null;
      state.items = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error.message;
    });

    builder.addCase(newItem.pending, (state, action) => {
      state.loading = true;
      state.status = null;
      state.error = null;
    });
    builder.addCase(newItem.fulfilled, (state, action) => {
      state.item = action.payload.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(newItem.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.error.message;
    });

    builder.addCase(getItemById.pending, (state, action) => {
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(getItemById.fulfilled, (state, action) => {
      state.item = action.payload.data.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(getItemById.rejected, (state, action) => {
      // state.item = null;
      // state.items = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default itemSlice.reducer;
