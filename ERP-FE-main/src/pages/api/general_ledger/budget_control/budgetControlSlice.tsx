import * as glService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllBudgetControls = createAsyncThunk(
    'budgetcontrols/fetchAllBudgetControls',
    async (_, {rejectWithValue}) => {
        try{
            const response = await glService.getAllBudgetControl();
            return response;
        }
        catch (error:any) {
            throw rejectWithValue(error);
        }
    }
);
export const newBudgetControl = createAsyncThunk(
    'budgetcontrols/newBudgetControl',
    async (data : any, {rejectWithValue}) => {
        try{
            const response = await glService.newBudgetControl(data);
            return response;
        }
        catch (error:any) {
            throw rejectWithValue(error);
        }
    }
);

export interface BudgetControlsState {
    budgetcontrol: any;
    budgetcontrols: Array<any>;
    loading: boolean;
    status: string | null;
    error: any;
}

const initialState: BudgetControlsState = {
    budgetcontrol: null,
    budgetcontrols: [],
    loading: false,
    status: null,
    error: null
};

const budgetControlSlice = createSlice({
    name: 'budgetcontrols',
    initialState,
    reducers: {
        clearState: (state: BudgetControlsState, action) => {
            state.budgetcontrol = null;
            state.budgetcontrols = [];
            state.loading = false;
            state.status = null;
            state.error = null;
        },
    },
    extraReducers(builder){
        builder.addCase(fetchAllBudgetControls.pending, (state, action) => {
            // state.item= null;
            // state.items = [];
            state.loading = true;
            state.status = null;
            state.error = null;
        });
        builder.addCase(fetchAllBudgetControls.fulfilled, (state, action) => {
            // state.item= null;
            state.budgetcontrols = action.payload.data.data;
            state.loading = false;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(fetchAllBudgetControls.rejected, (state, action) => {
            // state.item= null;
            // state.items = [];
            state.loading = false;
            state.status = 'failed';
            state.error = action.error.message;
        });
      
        builder.addCase(newBudgetControl.pending, (state, action) => {
            state.loading = true;
            state.status = null;
            state.error = null;
        });
        builder.addCase(newBudgetControl.fulfilled, (state, action) => {
            state.budgetcontrol = action.payload.data.data;
            console.log(state, action)
            state.loading = false;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(newBudgetControl.rejected, (state, action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})
export default budgetControlSlice.reducer;