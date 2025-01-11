import {configureStore} from "@reduxjs/toolkit";
import todoListReducer from "./todoListSlice";
import todoDashboardReducer from "./todoDashboardSlice";

export const store = configureStore({
    reducer: {
        todoList: todoListReducer,
        todoDashboard: todoDashboardReducer
    }
})