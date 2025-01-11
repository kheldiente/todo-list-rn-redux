import { createSlice } from "@reduxjs/toolkit";
import sampleTasks from "../data/sampleTasks";
import { getTodoDashboardData } from "../utils";

const initialState = {
    // value: sampleTasks
    value: []
}

export const todoDashboardSlice = createSlice({
    name: "todoDashboard",
    initialState,
    reducers: {
        updateDashboard: (state, action) => {
            state.value = [
                ...state.value, 
                getTodoDashboardData(action.payload)
            ]
        }
    }
})

export const { updateDashboard } = todoDashboardSlice.actions;

export default todoDashboardSlice.reducer;