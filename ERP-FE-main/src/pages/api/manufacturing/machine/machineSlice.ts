import { manufacturingApi } from '../';

export const getAllMachine = async () =>
manufacturingApi.get('/machine');
import * as machineService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllMachine = createAsyncThunk(
  'productionOrders/fetchAllMachines',
  async (_, { rejectWithValue }) => {
    try {
      const response = await machineService.getAllMachine();
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
//       const response = await machineService.newProductionOrder(data);
//       return response;
//     } catch (error: any) {
//       throw rejectWithValue(error);
//     }
//   },
// );

export interface MachineState {
  machine: any;
  machines: Array<any>;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: MachineState = {
  machine: null,
  machines: [],
  loading: false,
  status: null,
  error: null,
};

const machineSlice = createSlice({
  name: 'machines',
  initialState,
  reducers: {
    clearState: (state: MachineState, action) => {
      state.machine = null;
      state.machines = [];
      state.loading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllMachine.pending, (state, action) => {
      // state.item= null;
      // state.items = [];
      state.loading = true;
      state.status = null;
      state.error = null;
    });
    builder.addCase(fetchAllMachine.fulfilled, (state, action) => {
      // state.item= null;
      state.machines = action.payload.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchAllMachine.rejected, (state, action) => {
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

export default machineSlice.reducer;
