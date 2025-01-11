import {configureStore} from "@reduxjs/toolkit";
import todoListReducer from "./todoListSlice";

export const store = configureStore({
    reducer: {
        todoList: todoListReducer,
    }
})