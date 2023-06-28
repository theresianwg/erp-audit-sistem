import * as glService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllNumberings = createAsyncThunk(
    'numberings/fetchAllNumberings',
    async (_, {rejectWithValue}) => {
        try{
            const response = await glService.getAllNumberings();
            return response;
        }
        catch (error:any) {
            throw rejectWithValue(error);
        }
    }
);
export const newNumbering = createAsyncThunk(
    'numberings/newNumbering',
    async (data : any, {rejectWithValue}) => {
        try{
            const response = await glService.newNumbering(data);
            return response;
        }
        catch (error:any) {
            throw rejectWithValue(error);
        }
    }
);
export interface NumberingsState {
    numbering: any;
    numberings: Array<any>;
    loading: boolean;
    status: string | null;
    error: any;
}

const initialState: NumberingsState = {
    numbering: null,
    numberings: [],
    loading: false,
    status: null,
    error: null
};

const NumberingSlice = createSlice({
    name: 'numberings',
    initialState,
    reducers: {
        clearState: (state:NumberingsState, action) => {
            state.numbering = null;
            state.numberings = [];
            state.loading = false;
            state.status = null;
            state.error = null;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchAllNumberings.pending, (state, action) => {
            console.log(state, action);
            state.loading = true;
            state.status = null;
            state.error = null;
        });
        builder.addCase(fetchAllNumberings.fulfilled, (state, action) => {
            // console.log(state, action);
            state.numberings = action.payload.data.data;
            state.loading = false;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(fetchAllNumberings.rejected, (state, action) => {
            console.log(state, action);
            state.loading = false;
            state.status = 'failed';
            state.error = action.error.message;
        });

        builder.addCase(newNumbering.pending, (state, action) => {
            console.log(state, action);
            state.loading = true;
            state.status = null;
            state.error = null;
        });
        builder.addCase(newNumbering.fulfilled, (state, action) => {
            state.numbering = action.payload.data.data;
            state.loading = false;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(newNumbering.rejected, (state, action) => {
            console.log(state, action);
            state.loading = false;
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})

export default NumberingSlice.reducer;
