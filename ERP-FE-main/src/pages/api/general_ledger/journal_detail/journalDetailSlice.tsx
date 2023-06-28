import * as glService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllJournalDetails = createAsyncThunk(
    'journals/fetchAllJournalDetails',
    async (_, {rejectWithValue}) => {
        try{
            const response = await glService.getAllJournalDetails();
            return response;
        }
        catch (error:any) {
            throw rejectWithValue(error);
        }
    }
);
export const newJournalDetail = createAsyncThunk(
    'journals/newJournal',
    async (data : any, {rejectWithValue}) => {
        try{
            const response = await glService.newJournalDetail(data);
            return response;
        }
        catch (error:any) {
            throw rejectWithValue(error);
        }
    }
);
export interface JournalDetailsState {
    journaldetail: any;
    journaldetails: Array<any>;
    loading: boolean;
    status: string | null;
    error: any;
}

const initialState: JournalDetailsState = {
    journaldetail: null,
    journaldetails: [],
    loading: false,
    status: null,
    error: null
};

const journaDetailSlice = createSlice({
    name: 'journaldetails',
    initialState,
    reducers: {
        clearState: (state:JournalDetailsState, action) => {
            state.journaldetail = null;
            state.journaldetails = [];
            state.loading = false;
            state.status = null;
            state.error = null;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchAllJournalDetails.pending, (state, action) => {
            console.log(state, action);
            state.loading = true;
            state.status = null;
            state.error = null;
        });
        builder.addCase(fetchAllJournalDetails.fulfilled, (state, action) => {
            // console.log(state, action);
            state.journaldetails = action.payload.data.data;
            state.loading = false;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(fetchAllJournalDetails.rejected, (state, action) => {
            console.log(state, action);
            state.loading = false;
            state.status = 'failed';
            state.error = action.error.message;
        });

        builder.addCase(newJournalDetail.pending, (state, action) => {
            console.log(state, action);
            state.loading = true;
            state.status = null;
            state.error = null;
        });
        builder.addCase(newJournalDetail.fulfilled, (state, action) => {
            state.journaldetail = action.payload.data.data;
            state.loading = false;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(newJournalDetail.rejected, (state, action) => {
            console.log(state, action);
            state.loading = false;
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})

export default journaDetailSlice.reducer;