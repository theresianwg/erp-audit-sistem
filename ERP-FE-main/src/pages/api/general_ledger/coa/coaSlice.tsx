import * as glService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllCoas = createAsyncThunk(
  'coas/fetchAllCoas',
  async (_, { rejectWithValue }) => {
    try {
      const response = await glService.getAllCoas();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const fetchCoaById = createAsyncThunk(
  'coas/fetchCoaById',
  async (id:any, { rejectWithValue }) => {
    try {
      const response = await glService.getCoaById(id);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const newCoa = createAsyncThunk(
  'coas/newCoa',
  async (data: any, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await glService.newCoa(data);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const updateCoa = createAsyncThunk(
    'coas/updateCoa',
    async (data : any, {rejectWithValue}) => {
        try{
            console.log(data.data)
            const response = await glService.updateCoa(data.id,data.data);
            return response;
        }
        catch (error:any) {
            throw rejectWithValue(error);
        }
    }
);

export const deleteCoa = createAsyncThunk(
    'coas/deleteCoa',
    async (id : any, {rejectWithValue}) => {
        try{
            console.log(id);
            const response = await glService.deleteCoa(id);
            return response;
        }
        catch (error:any) {
            throw rejectWithValue(error);
        }
    }
);

export interface CoasState {
  coa: any;
  coas: Array<any>;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: CoasState = {
  coa: null,
  coas: [],
  loading: false,
  status: null,
  error: null,
};

const coaSlice = createSlice({
  name: 'coas',
  initialState,
  reducers: {
    clearState: (state: CoasState, action) => {
      state.coa = null;
      state.coas = [];
      state.loading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllCoas.pending, (state, action) => {
      // state.item= null;
      // state.items = [];
      state.loading = true;
      state.status = null;
      state.error = null;
    });
    builder.addCase(fetchAllCoas.fulfilled, (state, action) => {
      // state.item= null;
      state.coas = action.payload.data.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchAllCoas.rejected, (state, action) => {
      // state.item= null;
      // state.items = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error.message;
    });

    builder.addCase(newCoa.pending, (state, action) => {
      state.loading = true;
      state.status = null;
      state.error = null;
    });
    builder.addCase(newCoa.fulfilled, (state, action) => {
      state.coa = action.payload.data.data;
      console.log(state, action)
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(newCoa.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.error.message;
    });

    builder.addCase(updateCoa.pending, (state, action) => {
      state.loading = true;
      state.status = null;
      state.error = null;
    });
    builder.addCase(updateCoa.fulfilled, (state, action) => {
      state.coa = action.payload.data.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(updateCoa.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.error.message;
    });

    builder.addCase(deleteCoa.pending, (state, action) => {
      state.loading = true;
      state.status = null;
      state.error = null;
    });
    builder.addCase(deleteCoa.fulfilled, (state, action) => {
      state.coa = action.payload.data;
      console.log(action)
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(deleteCoa.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.error.message;
    });

    builder.addCase(fetchCoaById.pending, (state, action) => {
      state.loading = true;
      state.status = null;
      state.error = null;
    });
    builder.addCase(fetchCoaById.fulfilled, (state, action) => {
      state.coa = action.payload.data;
      // console.log(action)
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchCoaById.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default coaSlice.reducer;
