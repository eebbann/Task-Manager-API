const getAllTasks = (req, res) => {
	res.send('get all tasks here');
}
const createTask = (req, res) => {
	res.json(req.body);
}
const getTask = (req, res) => {
	res.json({id:req.params.id});
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
