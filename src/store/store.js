import {configureStore} from "@reduxjs/toolkit";
import todoListReducer from "./todoListSlice";
import addTodoReducer from "./addTodoSlice";

export const store = configureStore({
    reducer: {
        todoList: todoListReducer,
        addTodoInput: addTodoReducer,
    }
})