const express = require("express");

const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/tasks/createtask", taskController.createTask);

router.get("/tasks", taskController.getAllTasks);

router.get("/tasks/:id", taskController.searchById)
// “Take the value in this part of the URL and store it inside req.params.id.”

// put(update request)
router.put("/tasks/updatetask/:id", taskController.updateById);
// steps: 
// 1. create route then 
// 2. create controller(controller needs path variable id)
// 3. create service (cuz service needs the controllers req.body)


router.delete("/tasks/deletetask/:id", taskController.deleteById);

module.exports = router;