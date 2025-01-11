import todoType from "../store/todoType"

export const getTaskType = (id) => {
    return Object.entries(todoType).find(([key, value]) => value.id === id)[1]
}

export const getTaskName = (id) => {
    return getTaskType(id).name
}