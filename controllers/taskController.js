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

function searchById(req, res) {
    const id = Number(req.params.id);
    // gets id from the url(pathvariable) and convert to number
    const task = taskService.searchById(id);

    if (task === undefined) {
        // === is strict equality, checks value and type, like java's ==
        res.send("Task not found")
    }

    else {
        res.json(task);
    }
    // returns the searched task as JSON
}


module.exports = {
    createTask,
    getAllTasks,
    searchById
};