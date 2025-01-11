import { createSlice } from "@reduxjs/toolkit";
import sampleTasks from "../data/sampleTasks";

const initialState = {
    value: sampleTasks
}

const randomTodoList = () => {
    return {
        name: "New tasks added",
        tagId: todoType.WORK.id,
    }
}

export const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        setTodoList: (state) => {
            state.value = [...state.value, randomTodoList()]
        }
    }
})

export const { setTodoList } = todoListSlice.actions;

export default todoListSlice.reducer;