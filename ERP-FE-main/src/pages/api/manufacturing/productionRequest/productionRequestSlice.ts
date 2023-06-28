import * as productionRequestService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllProductionRequest = createAsyncThunk(
  'productionRequests/fetchAllProductionRequests',
  async (_, { rejectWithValue }) => {
    try {
      const response = await productionRequestService.getAllProductionRequest();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

// export const newProductionRequest = createAsyncThunk(
//   'productionRequests/newproductionRequest',
//   async (data: any, { rejectWithValue }) => {
//     try {
//       console.log(data);
//       const response = await productionRequestService.newProductionRequest(
//         data,
//       );
//       return response;
//     } catch (error: any) {
//       throw rejectWithValue(error);
//     }
//   },
// );

export interface ProductionRequestState {
  productionRequest: any;
  productionRequests: Array<any>;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: ProductionRequestState = {
  productionRequest: null,
  productionRequests: [],
  loading: false,
  status: null,
  error: null,
};

const productionRequestSlice = createSlice({
  name: 'productionRequests',
  initialState,
  reducers: {
    clearState: (state: ProductionRequestState, action) => {
      state.productionRequest = null;
      state.productionRequests = [];
      state.loading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllProductionRequest.pending, (state, action) => {
      // state.item= null;
      // state.items = [];
      state.loading = true;
      state.status = null;
      state.error = null;
    });
    builder.addCase(fetchAllProductionRequest.fulfilled, (state, action) => {
      // state.item= null;
      state.productionRequests = action.payload.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchAllProductionRequest.rejected, (state, action) => {
      // state.item= null;
      // state.items = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error.message;
    });

    // builder.addCase(newProductionRequest.pending, (state, action) => {
    //   state.loading = true;
    //   state.status = null;
    //   state.error = null;
    // });
    // builder.addCase(newProductionRequest.fulfilled, (state, action) => {
    //   state.productionRequest = action.payload.data;
    //   state.loading = false;
    //   state.status = 'success';
    //   state.error = null;
    // });
    // builder.addCase(newProductionRequest.rejected, (state, action) => {
    //   state.loading = false;
    //   state.status = 'failed';
    //   state.error = action.error.message;
    // });
  },
});

export default productionRequestSlice.reducer;
