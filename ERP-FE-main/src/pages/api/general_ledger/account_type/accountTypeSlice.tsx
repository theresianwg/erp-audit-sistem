import * as glService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllAccountTypes = createAsyncThunk(
  'accounttypes/fetchAllAccountTypes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await glService.getAllAccountTypes();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const newAccountType = createAsyncThunk(
  'accounttypes/newAccountType',
  async (data: any, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await glService.newAccountType(data);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

// export const updateAccountType = createAsyncThunk(
//     'accounttypes/updateAccountType',
//     async (data : any, {rejectWithValue}) => {
//         try{
//             console.log(data);
//             const response = await glService.updateAccountType(data);
//             return response;
//         }
//         catch (error:any) {
//             throw rejectWithValue(error);
//         }
//     }
// );

// export const deleteAccountType = createAsyncThunk(
//     'accounttypes/deleteAccountType',
//     async (data : any, {rejectWithValue}) => {
//         try{
//             console.log(data);
//             const response = await glService.deleteAccountType(data);
//             return response;
//         }
//         catch (error:any) {
//             throw rejectWithValue(error);
//         }
//     }
// );

export interface AccountTypesState {
  accounttype: any;
  accounttypes: Array<any>;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: AccountTypesState = {
  accounttype: null,
  accounttypes: [],
  loading: false,
  status: null,
  error: null,
};

const accountTypeSlice = createSlice({
    name: 'accounttypes',
    initialState,
    reducers: {
        clearState: (state:AccountTypesState, action) => {
            state.accounttype = null;
            state.accounttypes = [];
            state.loading = false;
            state.status = null;
            state.error = null;
        }
    },
    extraReducers(builder) {
        // fetchAllAccountType
        builder.addCase(fetchAllAccountTypes.pending, (state, action) => {
            state.loading = true;
            state.status = null;
            state.error = null;
        });
        builder.addCase(fetchAllAccountTypes.fulfilled, (state, action) => {
            // console.log(state, action);
            // state.item= null;
            state.accounttypes = action.payload.data.data;
            state.loading = false;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(fetchAllAccountTypes.rejected, (state, action) => {
            // state.item= null;
            // state.items = [];
            state.loading = false;
            state.status = 'failed';
            state.error = action.error.message;
        });
        // new Account Type
        builder.addCase(newAccountType.pending, (state, action) => {
            state.loading = true;
            state.status = null;
            state.error = null;
        });
        builder.addCase(newAccountType.fulfilled, (state, action) => {
            state.accounttypes = action.payload.data;
            state.loading = false;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(newAccountType.rejected, (state, action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = action.error.message;
        });
        // // Update Account Type
        // builder.addCase(updateAccountType.pending, (state, action) => {
        //     state.loading = true;
        //     state.status = null;
        //     state.error = null;
        // });
        // builder.addCase(updateAccountType.fulfilled, (state, action) => {
        //     state.accounttypes = action.payload.data;
        //     state.loading = false;
        //     state.status = 'success';
        //     state.error = null;
        // });
        // builder.addCase(updateAccountType.rejected, (state, action) => {
        //     state.loading = false;
        //     state.status = 'failed';
        //     state.error = action.error.message;
        // });
        // // Delete Account Type
        // builder.addCase(deleteAccountType.pending, (state, action) => {
        //     state.loading = true;
        //     state.status = null;
        //     state.error = null;
        // });
        // builder.addCase(deleteAccountType.fulfilled, (state, action) => {
        //     state.accounttypes = action.payload.data;
        //     state.loading = false;
        //     state.status = 'success';
        //     state.error = null;
        // });
        // builder.addCase(deleteAccountType.rejected, (state, action) => {
        //     state.loading = false;
        //     state.status = 'failed';
        //     state.error = action.error.message;
        // });
    }
});

export default accountTypeSlice.reducer;
