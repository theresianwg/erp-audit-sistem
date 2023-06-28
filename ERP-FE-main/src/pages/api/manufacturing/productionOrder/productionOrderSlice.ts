import * as productionOrderService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllProductionOrder = createAsyncThunk(
  'productionOrders/fetchAllProductionOrders',
  async (_, { rejectWithValue }) => {
    try {
      const response = await productionOrderService.getAllProductionOrder();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

// export const newProductionOrders = createAsyncThunk(
//   'productionOrders/newProductionOrders',
//   async (data: any, { rejectWithValue }) => {
//     try {
//       console.log(data);
//       const response = await productionOrderService.newProductionOrder(data);
//       return response;
//     } catch (error: any) {
//       throw rejectWithValue(error);
//     }
//   },
// );

export interface ProductionOrderState {
  productionOrder: any;
  productionOrders: Array<any>;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: ProductionOrderState = {
  productionOrder: null,
  productionOrders: [],
  loading: false,
  status: null,
  error: null,
};

const productionOrderSlice = createSlice({
  name: 'productionOrders',
  initialState,
  reducers: {
    clearState: (state: ProductionOrderState, action) => {
      state.productionOrder = null;
      state.productionOrders = [];
      state.loading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllProductionOrder.pending, (state, action) => {
      // state.item= null;
      // state.items = [];
      state.loading = true;
      state.status = null;
      state.error = null;
    });
    builder.addCase(fetchAllProductionOrder.fulfilled, (state, action) => {
      // state.item= null;
      state.productionOrders = action.payload.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchAllProductionOrder.rejected, (state, action) => {
      // state.item= null;
      // state.items = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error.message;
    });

    // builder.addCase(newProductionOrders.pending, (state, action) => {
    //   state.loading = true;
    //   state.status = null;
    //   state.error = null;
    // });
    // builder.addCase(newProductionOrders.fulfilled, (state, action) => {
    //   state.productionOrder = action.payload.data;
    //   state.loading = false;
    //   state.status = 'success';
    //   state.error = null;
    // });
    // builder.addCase(newProductionOrders.rejected, (state, action) => {
    //   state.loading = false;
    //   state.status = 'failed';
    //   state.error = action.error.message;
    // });
  },
});

export default productionOrderSlice.reducer;
