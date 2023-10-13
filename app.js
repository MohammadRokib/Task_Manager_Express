const express = require('express');
const app = express();

//--  Middlewares  --\\
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

//-- routes  --\\

//--  Get all tasks  --\\
app.get('/api/v1/tasks', (req, res) => {
    res.status(200).json({ success:true, msg:`Getting all tasks` });
});

//--  Create new task  --\\
app.post('/api/v1/tasks', (req, res) => {
    const { name } = req.body;

    res.status(200).json({ success:true, msg:`Creating new task: ${name}` });
});

//--  Get single task  --\\
app.get('/api/v1/tasks/:id', (req, res) => {
    const { id:taskID } = req.params;

    res.status(200).json({ success:true, msg:`Getting task ${taskID} `});
});

//--  Update task  --\\
app.patch('/api/v1/tasks/:id', (req, res) => {
    const { id:taskID } = req.params;
    const { name } = req.body;

    res.status(200).json({ success:true, msg:`Updating task ${taskID} with ${name} `});
});

//--  Delete task  --\\
app.delete('/api/v1/tasks/:id', (req, res) => {
    const { id:taskID } = req.params;

    res.status(200).json({ success:true, msg:`Deleting task ${taskID} `});
});

//--  Listener  --\\
const port = 5000;
app.listen(port, console.log(`Server is listening to port: ${port}....`));
