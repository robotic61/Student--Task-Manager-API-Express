const express = require("express");

const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/tasks/createtask", taskController.createTask);

router.get("/tasks", taskController.getAllTasks);

router.get("/tasks/:id", taskController.searchById)
// “Take the value in this part of the URL and store it inside req.params.id.”

module.exports = router;