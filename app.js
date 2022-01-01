const express = require ('express');
const app = express();


app.get('/', (req, res) => {
	res.send('task manager');
}
);
app.listen(3100, () => {console.log('server listening')}
)
