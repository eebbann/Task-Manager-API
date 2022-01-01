const getAllTasks = (req, res) => {
	res.send('get all tasks that are not completed');
}
const createTask = (req, res) => {
	res.send('create a new task');
}
const getTask = (req, res) => {
	res.send('get a task by id');
}
const updateTask = (req, res) => {
	res.send('update a task by id');
}
const deleteTask = (req, res) => {
	res.send('delete a task by id');
}

module.exports = {
	getAllTasks, createTask, getTask, updateTask, deleteTask
}
// Compare this snippet from task_API/routes/tasks.js:
