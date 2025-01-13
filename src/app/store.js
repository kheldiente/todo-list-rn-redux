import {configureStore} from "@reduxjs/toolkit";
import todoListReducer from "../screen/todoList/todoListSlice";
import addTodoReducer from "../screen/addTodo/addTodoSlice";

export const store = configureStore({
    reducer: {
        todoList: todoListReducer,
        addTodoInput: addTodoReducer,
    }
})