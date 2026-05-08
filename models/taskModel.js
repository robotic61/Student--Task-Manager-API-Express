function createTaskObject(data) {
    return {
        id: data.id,
        title: data.title,
        description: data.description,
        completed: data.completed
    }
}

module.exports = {
    createTaskObject
};