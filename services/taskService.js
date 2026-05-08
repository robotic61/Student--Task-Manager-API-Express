const taskModel = require("../models/taskModel");

const tasks = [];

function createTask(data) {
    const task = taskModel.createTaskObject(data);

    tasks.push(task);

    return task;
}

function getAllTasks() {
    return tasks;
}



module.exports = {
    createTask,
    getAllTasks
};

