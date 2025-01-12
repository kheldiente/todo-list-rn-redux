import todoType from "./todoType";

export default sampleTasks = [
    {
        name: "Drink 8 glasses of water",
        tagId: todoType.HEALTH.id,
        time: "6:00 AM",
        subtasks: []
    },
    {
        name: "Edit the PDF",
        tagId: todoType.WORK.id,
        subtasks: []
    },
    {
        name: "Write in a gratitude journal",
        tagId: todoType.MENTAL_HEALTH.id,
        time: "8:00 PM",
        subtasks: [
            { id: 1, desc: "Get a  notebook" },
            { id: 2, desc: "Follow the youtube tutorial" }
        ]
    },
    {
        name: "Stretch everyday for 15 mins",
        tagId: todoType.HEALTH.id,
        subtasks: []
    },
]