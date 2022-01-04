const mongoose = require ('mongoose');

const TaskSchema = new mongoose.Schema({
  name : {
		type: String,
		required : [true, "set a name for your task"],
		trim: true,
		maxlength : [20, "should not be more than 20"],
	},completed:{
		type:Boolean,
		required: false
	}
})

module.exports = mongoose.model('Task', TaskSchema)