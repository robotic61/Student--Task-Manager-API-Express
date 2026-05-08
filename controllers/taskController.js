const taskService = require("../services/taskService");

// controllers = methods to be used in route
function createTask(req, res) {
    const task = taskService.createTask(req.body);

    res.json(task);
}

function getAllTasks(req, res) {
    const tasks = taskService.getAllTasks();

    res.json(tasks);
}

module.exports = {
    createTask,
    getAllTasks
};