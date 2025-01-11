import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}
var count = 0;

const randomTodoList = () => {
    return `Drink ${++count} glasses of water`
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