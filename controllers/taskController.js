const taskService = require("../services/taskService");

// controllers = methods to be used in route
function createTask(req, res) {
    const task = taskService.createTask(req.body);

    res.json(task);
    // sends data back to the client as JSON.
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

function updateById(req, res) {
    const id = Number(req.params.id);

    const updatedTask = taskService.updateById(id, req.body);

    if (updatedTask === undefined) { // if returned undefined from updatedtask
        res.send("Task not found");
        /*
        res.send() sends the HTTP response, BUT it does NOT automatically stop the function.

        So the next line CAN still run.

        Example
        function test(req, res) {

            res.send("Hello");

            console.log("Still running");
        }

        Result:

        client receives "Hello"

        console ALSO prints:

        Still running

        So function continues.
        */
    }
    else {
        res.json(updatedTask);
    }
}

function deleteById(req, res) {
    const id = Number(req.params.id);
    const deletedTask = taskService.deleteById(id);
    if (deletedTask === undefined) {
        res.send("Task not found");
    }
    else {
        res.json(deletedTask);
    }
}

/*
Example Route
router.delete("/tasks/:id", taskController.deleteById);

Notice:

taskController.deleteById

NO parentheses.

So you are passing the FUNCTION itself.

Internally Express Does Something Similar To
const a = taskController.deleteById;

a(req, res);

Very similar idea.

*/

module.exports = {
    createTask,
    getAllTasks,
    searchById,
    updateById,
    deleteById
};