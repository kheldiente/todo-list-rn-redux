import todoType from "../data/todoType"

export const getTaskType = (id) => {
    return Object.entries(todoType).find(([key, value]) => value.id === id)[1]
}

export const getTaskName = (id) => {
    return getTaskType(id).name
}

export const getTodoDashboardData = (todos) => {
    const health = todos.filter((todo) => todo.tagId === todoType.HEALTH.id)
    const work = todos.filter((todo) => todo.tagId === todoType.WORK.id)
    const mentalHealth = todos.filter((todo) => todo.tagId === todoType.MENTAL_HEALTH.id)
    const others = todos.filter((todo) => todo.tagId === todoType.OTHERS.id)
    return {
        [todoType.HEALTH.id]: health,
        [todoType.WORK.id]: work,
        [todoType.MENTAL_HEALTH.id]: mentalHealth,
        [todoType.OTHERS.id]: others,
    }
}