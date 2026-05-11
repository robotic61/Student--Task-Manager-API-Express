const taskModel = require("../models/taskModel");

const tasks = [];

// return = used to end function or return value
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

1. Search task by id (Request param?), GET /tasks/1 ✅
2. Update Task PUT /tasks/1 ✅
3. Delete Task DELETE /tasks/1
*/

function updateById(id, newData) {
    const task = searchById(id);
    /*
    task is NOT a copy.

    It is a reference to the actual object inside the array.
    so when update this it updates the item in the array.

    Visual:

    tasks[0] ──┐
            ↓
        Task Object
        title = "Study"
            ↑
            task

    Both:

    tasks[0]
    task

    point to SAME object.

    It works this way because the array contains OBJECTS.

    Objects are reference types.

    If Array Contained Primitive Values

    Example:

    let numbers = [1, 2, 3];

    Now:

    let num = numbers[0];

    num becomes COPY of value 1.

    Visual:

    numbers[0] = 1

    num = 1

    Separate values.
    */

    if (task === undefined) {
        return undefined; // returns if undefined(no id found) so don't need to update.
    }

    // Only update fields if they are provided:
    /*
    What About Missing Fields?

    If you access:

    req.body.title

    there is no title field.

    So JavaScript gives:

    undefined
    */

    if (newData.title !== undefined) {
        // if data is not undefined, then update data
        task.title = newData.title;
          // updates the title field in the object(reference).
    }

    if (newData.description !== undefined) {
        task.description = newData.description;
    }

    if (newData.completed !== undefined) {
        task.completed = newData.completed;
    }

    return task;
    

    /*

    task.title = newData.title;
    task.description = newData.description;
    task.completed = newData.completed;

    return task;

    Important Issue

    This version replaces all fields.

    So if client sends only:

    {
    "completed": true
    }

    then:

    task.title = newData.title;

    becomes:

    undefined

    because title was not sent.
    */
}

// 3. Delete Task DELETE /tasks/1

function deleteById(id) {

    // find index where task.id = path variable id
    const index = tasks.findIndex(function(task) {
        return task.id == id;
    });
    
    // if index not found will return -1
    if (index === -1) {
        return undefined;
    }
    // if not found return undefined

    const deletetask = tasks.splice(index, 1);
    // splice returns the deleted element as an array.
    const deletedTask = deletetask[0];
    // returns the deleted item

    return deletedTask;
    /*
    Syntax
    array.splice(startIndex, deleteCount)

    Meaning:

    start at this index (startIndex)
    remove this many items from the start index(deleteCount)
    */
} 


/*
Summary
Method	        If Found	       If Not Found
.find()	        object	           undefined
.findIndex()    index number	   -1

*/



module.exports = {
    createTask,
    getAllTasks,
    searchById,
    updateById,
    deleteById
};

