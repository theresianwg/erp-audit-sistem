import * as glService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllTransactionTypes = createAsyncThunk(
    'transactiontypes/fetchAllTransactionTypes',
    async (_, {rejectWithValue}) => {
        try{
            const response = await glService.getAllTransactionTypes();
            return response;
        }
        catch (error:any) {
            throw rejectWithValue(error);
        }
    }
);
export const newTransactionType = createAsyncThunk(
    'transactiontypes/newTransactionType',
    async (data : any, {rejectWithValue}) => {
        try{
            const response = await glService.newTransactionType(data);
            return response;
        }
        catch (error:any) {
            throw rejectWithValue(error);
        }
    }
);

export interface TransactionTypesState {
    transactiontype: any;
    transactiontypes: Array<any>;
    loading: boolean;
    status: string | null;
    error: any;
}

const initialState: TransactionTypesState = {
    transactiontype: null,
    transactiontypes: [],
    loading: false,
    status: null,
    error: null
};

const transactionTypeSlice = createSlice({
    name: 'transactiontypes',
    initialState,
    reducers: {
        clearState: (state:TransactionTypesState, action) => {
            state.transactiontype = null;
            state.transactiontypes = [];
            state.loading = false;
            state.status = null;
            state.error = null;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchAllTransactionTypes.pending, (state, action) => {
            console.log(state, action);
            state.loading = true;
            state.status = null;
            state.error = null;
        });
        builder.addCase(fetchAllTransactionTypes.fulfilled, (state, action) => {
            // console.log(state, action);
            state.transactiontypes = action.payload.data.data;
            state.loading = false;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(fetchAllTransactionTypes.rejected, (state, action) => {
            console.log(state, action);
            state.loading = false;
            state.status = 'failed';
            state.error = action.error.message;
        });

        builder.addCase(newTransactionType.pending, (state, action) => {
            console.log(state, action);
            state.loading = true;
            state.status = null;
            state.error = null;
        });
        builder.addCase(newTransactionType.fulfilled, (state, action) => {
            // console.log(state, action);
            state.transactiontype = action.payload.data.data;
            state.loading = false;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(newTransactionType.rejected, (state, action) => {
            console.log(state, action);
            state.loading = false;
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})

export default transactionTypeSlice.reducer;