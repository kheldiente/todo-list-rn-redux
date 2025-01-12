import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        input: "",
        subtasks: [{ id: 0, desc: "" }],
        selectedTag: null,
    }
}

export const addTodoSlice = createSlice({
    name: "addTodoInput",
    initialState,
    reducers: {
        updateTodoInput: (state, action) => {
            state.value = action.payload
        },
        updateSubtask: (state, action) => {
            state.value = {
                ...state.value,
                subtasks: state.value.subtasks.map((s) =>
                    s.id === action.payload.id
                        ? { ...s, desc: action.payload.desc }
                        : s
                )
            }
        },
        updateSelectedTag: (state, action) => {
            state.value = {
                ...state.value,
                selectedTag: action.payload
            }
        },
        addSubtask: (state, action) => {
            var updated = state.value.subtasks
            updated.push({ id: 0, desc: "" })

            state.value = {
                ...state.value,
                subtasks: updated
            }
        }
    }
})

export const {
    updateTodoInput,
    updateSubtask,
    updateSelectedTag,
    addSubtask
} = addTodoSlice.actions;

export default addTodoSlice.reducer;