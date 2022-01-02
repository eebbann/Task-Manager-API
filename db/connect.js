const mongoose = require ('mongoose');
const dbTask = 'mongodb+srv://eebann:JAmesbisong@task.nwyny.mongodb.net/NodeTask?retryWrites=true&w=majority';
const connectDB= (url)=>{mongoose.connect(dbTask,
	 {useNewUrlParser: true, 
		useUnifiedTopology: true})}


module.exports = connectDB;