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

// 1. Search task by id (Request param?), GET /tasks/1
function searchById(id) {
    const task = tasks.find(function(task) {
        return task.id === id; // need to return boolean
    });
    // input function into find, since js need instructions on what to find.
    /*
    .find() internally does something like:

    for each item in array:
    run checkFunction(item)

    if result is true:
        return item
    */

        return task;
}
/*
Additional methods:

1. Search task by id (Request param?), GET /tasks/1
2. Update Task PUT /tasks/1
3. Delete Task DELETE /tasks/1
*/




module.exports = {
    createTask,
    getAllTasks,
    searchById
};

