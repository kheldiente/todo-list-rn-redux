import { createSlice } from "@reduxjs/toolkit";
import sampleTasks from "../data/sampleTasks";

const initialState = {
    // value: sampleTasks
    value: []
}

export const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.value = [...state.value, action.payload]
        }
    }
})

export const { addTodo } = todoListSlice.actions;

export default todoListSlice.reducer;