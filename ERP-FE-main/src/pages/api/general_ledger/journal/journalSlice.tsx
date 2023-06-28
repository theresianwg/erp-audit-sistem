import * as glService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllJournals = createAsyncThunk(
    'journals/fetchAllJournals',
    async (_, {rejectWithValue}) => {
        try{
            const response = await glService.getAllJournals();
            return response;
        }
        catch (error:any) {
            throw rejectWithValue(error);
        }
    }
);

export const  fetchJournalDetailByJournal = createAsyncThunk(
    'journals/fetchJournalDetail',
    async (data:any, {rejectWithValue}) => {
        try{
            const response = await glService.getAllJournalDetailByJournal(data.code);
            return response;
        }
        catch (error:any) {
            throw rejectWithValue(error);
        }
    }
)
export const newJournal = createAsyncThunk(
    'journals/newJournal',
    async (data : any, {rejectWithValue}) => {
        try{
            const response = await glService.newJournal(data);
            return response;
        }
        catch (error:any) {
            throw rejectWithValue(error);
        }
    }
);

export interface JournalsState {
    journal: any;
    journals: Array<any>;
    journaldetails: Array<any>;
    loading: boolean;
    status: string | null;
    error: any;
}

const initialState: JournalsState = {
    journal: null,
    journaldetails: [],
    journals: [],
    loading: false,
    status: null,
    error: null
};

const journalSlice = createSlice({
    name: 'journals',
    initialState,
    reducers: {
        clearState: (state:JournalsState, action) => {
            state.journal = null;
            state.journals = [];
            state.journaldetails = [],
            state.loading = false;
            state.status = null;
            state.error = null;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchAllJournals.pending, (state, action) => {
            console.log(state, action);
            state.loading = true;
            state.status = null;
            state.error = null;
        });
        builder.addCase(fetchAllJournals.fulfilled, (state, action) => {
            // console.log(state, action);
            state.journals = action.payload.data.data;
            state.loading = false;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(fetchAllJournals.rejected, (state, action) => {
            console.log(state, action);
            state.loading = false;
            state.status = 'failed';
            state.error = action.error.message;
        });
        builder.addCase(newJournal.pending, (state, action) => {
            state.loading = true;
            state.status = null;
            state.error = null;
        });
        builder.addCase(newJournal.fulfilled, (state, action) => {
            state.journals = action.payload.data;
            state.loading = false;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(newJournal.rejected, (state, action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = action.error.message;
        });
        builder.addCase(fetchJournalDetailByJournal.pending, (state, action) => {
            state.loading = true;
            state.status = null;
            state.error = null;
        });
        builder.addCase(fetchJournalDetailByJournal.fulfilled, (state, action) => {
            console.log(state, action)
            state.journaldetails = action.payload.data.data;
            state.loading = false;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(fetchJournalDetailByJournal.rejected, (state, action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
});

export default journalSlice.reducer;