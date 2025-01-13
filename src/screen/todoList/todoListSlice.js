import { createSlice } from "@reduxjs/toolkit";
import sampleTasks from "../../data/sampleTasks";
import { getTodoDashboardData } from "../../utils";

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
        toggleTodoCheckbox: (state, action) => {
            state.value = {
                todos: state.value.todos.map((todo) =>
                    todo.id == action.payload.id
                        ? { ...todo, checked: !todo.checked }
                        : todo
                ),
                dashboard: state.value.dashboard
            }
        },
        toggleSubtaskTodoCheckbox: (state, action) => {
            const newTodos = state.value.todos.map((todo) =>
                todo.id == action.payload.parentId
                    ? {
                        ...todo,
                        subtasks: todo.subtasks.map((subtask) =>
                            subtask.id == action.payload.childId
                                ? { ...subtask, checked: !subtask.checked }
                                : subtask
                        )
                    }
                    : todo
            )
            state.value = {
                todos: newTodos,
                dashboard: state.value.dashboard
            }
        },
        deleteTodo: (state, action) => {
            const updated = state.value.todos.filter((todo) =>
                todo.id !== action.payload
            )
            state.value = {
                todos: updated,
                dashboard: getTodoDashboardData(updated)
            }
        }
    }
})

export const {
    addTodo,
    toggleTodoCheckbox,
    toggleSubtaskTodoCheckbox,
    deleteTodo
} = todoListSlice.actions;

export default todoListSlice.reducer;