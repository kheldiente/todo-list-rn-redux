import todoType from "./todoType";

export default sampleTasks = [
    {
        id: "todo1",
        name: "Drink 8 glasses of water",
        tagId: todoType.HEALTH.id,
        time: "6:00 AM",
        subtasks: [],
        checked: true,
    },
    {
        id: "todo2",
        name: "Write in a gratitude journal",
        tagId: todoType.MENTAL_HEALTH.id,
        time: "8:00 PM",
        subtasks: [
            { id: 1, desc: "Get a  notebook", checked: true },
            { id: 2, desc: "Follow the youtube tutorial" }
        ]
    },
]