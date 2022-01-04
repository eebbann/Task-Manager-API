const Task = require('../models/Task')
const getAllTasks = (req, res) => {
	res.send('get all tasks here');
}
const createTask = async(req, res) => {
	const task = await Task.create(req.body)
		res.status(201).json({task});
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
