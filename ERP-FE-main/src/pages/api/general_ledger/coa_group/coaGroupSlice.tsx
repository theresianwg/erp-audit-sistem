import * as glService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllCoaGroups = createAsyncThunk(
  'coagroups/fetchAllCoaGroups',
  async (_, { rejectWithValue }) => {
    try {
      const response = await glService.getAllCoaGroups();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const newCoaGroup = createAsyncThunk(
  'coagroups/newCoaGroup',
  async (data: any, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await glService.newCoaGroup(data);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

// export const updateCoaGroup = createAsyncThunk(
//   'coagroups/updateCoaGroup',
//   async (data: any, { rejectWithValue }) => {
//     try {
//       console.log(data);
//       const response = await glService.updateCoaGroup(data);
//       return response;
//     } catch (error: any) {
//       throw rejectWithValue(error);
//     }
//   },
// );

// export const deleteCoaGroup = createAsyncThunk(
//     'coagroups/deleteCoaGroup',
//     async (id:string, {rejectWithValue}) => {
//         try{
//             console.log(id);
//             const response = await glService.deleteCoaGroup(id);
//             return response;
//         }
//         catch (error:any) {
//             throw rejectWithValue(error);
//         }
//     }
// );

export interface CoaGroupsState {
  coagroup: any;
  coagroups: Array<any>;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: CoaGroupsState = {
  coagroup: null,
  coagroups: [],
  loading: false,
  status: null,
  error: null,
};

const coaGroupSlice = createSlice({
    name: 'coagroups',
    initialState,
    reducers: {
        clearState: (state:CoaGroupsState, action) => {
            state.coagroup = null;
            state.coagroups = [];
            state.loading = false;
            state.status = null;
            state.error = null;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchAllCoaGroups.pending, (state, action) => {
            // state.item= null;
            // state.items = [];
            console.log(state, action);
            state.loading = true;
            state.status = null;
            state.error = null;
        });
        builder.addCase(fetchAllCoaGroups.fulfilled, (state, action) => {
            console.log(state, action);
            state.coagroups = action.payload.data.data;
            state.loading = false;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(fetchAllCoaGroups.rejected, (state, action) => {
            console.log(state, action);
            state.loading = false;
            state.status = 'failed';
            state.error = action.error.message;
        });

        builder.addCase(newCoaGroup.pending, (state, action) => {
        state.loading = true;
        state.status = null;
        state.error = null;
        });
        builder.addCase(newCoaGroup.fulfilled, (state, action) => {
        state.coagroups = action.payload.data;
        state.loading = false;
        state.status = 'success';
        state.error = null;
        });
        builder.addCase(newCoaGroup.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.error.message;
        });

    // builder.addCase(updateCoaGroup.pending, (state, action) => {
    //   state.loading = true;
    //   state.status = null;
    //   state.error = null;
    // });
    // builder.addCase(updateCoaGroup.fulfilled, (state, action) => {
    //   state.coagroups = action.payload.data;
    //   state.loading = false;
    //   state.status = 'success';
    //   state.error = null;
    // });
    // builder.addCase(updateCoaGroup.rejected, (state, action) => {
    //   state.loading = false;
    //   state.status = 'failed';
    //   state.error = action.error.message;
    // });

    // builder.addCase(deleteCoaGroup.pending, (state, action) => {
    //   state.loading = true;
    //   state.status = null;
    //   state.error = null;
    // });
    // builder.addCase(deleteCoaGroup.fulfilled, (state, action) => {
    //   state.coagroups = action.payload.data;
    //   state.loading = false;
    //   state.status = 'success';
    //   state.error = null;
    // });
    // builder.addCase(deleteCoaGroup.rejected, (state, action) => {
    //   state.loading = false;
    //   state.status = 'failed';
    //   state.error = action.error.message;
    // });
  },
});

export default coaGroupSlice.reducer;
