import { createSlice } from "@reduxjs/toolkit";
import sampleTasks from "../data/sampleTasks";
import { getTodoDashboardData } from "../utils";

// Mock data ONLY
const initialState = {
    value: {
        todos: [...sampleTasks],
        dashboard: {
            [todoType.HEALTH.id]: [{}, {}],
            [todoType.WORK.id]: [{}],
            [todoType.MENTAL_HEALTH.id]: [{}],
        }
    }
}

export const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newList = [...state.value.todos, action.payload]
            state.value = {
                todos: newList,
                dashboard: getTodoDashboardData(newList)
            }
        },
    }
})

export const { addTodo } = todoListSlice.actions;

export default todoListSlice.reducer;