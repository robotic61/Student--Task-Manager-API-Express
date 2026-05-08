const express = require("express");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());

app.use(taskRoutes);

app.listen(3000, function () {
    console.log("Server running on port 3000")
});