const express = require ('express');
const app = express();
const task = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.static('./public'))
app.use(express.json())
app.get('/', (req, res) => {
	res.send('task manager');}
);

app.use('/api/v1/tasks',task);

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
        app.listen(3100,  console.log('server listening 3100'));
	} catch (error) {
		console.log(error);
	}
}

start();