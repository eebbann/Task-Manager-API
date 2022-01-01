const express = require ('express');
const app = express();
const task = require('./routes/tasks');

app.use(express.json())
app.get('/', (req, res) => {
	res.send('task manager');}
);

app.use('/api/v1/tasks',task);


app.listen(3100, () => {console.log('server listening')}
)
