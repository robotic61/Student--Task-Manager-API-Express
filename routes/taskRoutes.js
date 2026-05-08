const express = require("express");

const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/tasks/createtask", taskController.createTask);

router.get("/tasks", taskController.getAllTasks);

module.exports = router;