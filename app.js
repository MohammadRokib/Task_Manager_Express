const express = require('express');
const app = express();

const tasks = require('./routes/tasks.js');

//--  Middlewares  --\\
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

//-- routes  --\\
app.use('/api/v1/tasks', tasks);

//--  Listener  --\\
const port = 5000;
app.listen(port, console.log(`Server is listening to port: ${port}....`));
