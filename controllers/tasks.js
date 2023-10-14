//--  Get all task  --\\
const getTask = (req, res) => {
    res.status(200).json({ success:true, msg:`Getting all tasks` });
};

//--  Create new task  --\\
const createTask = (req, res) => {
    const { name } = req.body;

    res.status(200).json({ success:true, msg:`Creating new task: ${name}` });
};

//--  Get single task  --\\
const getSingleTask = (req, res) => {
    const { id:taskID } = req.params;

    res.status(200).json({ success:true, msg:`Getting task ${taskID} `});
};

//--  Update task  --\\
const updateTask = (req, res) => {
    const { id:taskID } = req.params;
    const { name } = req.body;

    res.status(200).json({ success:true, msg:`Updating task ${taskID} with ${name} `});
};

//--  Delete task  --\\
const deleteTask = (req, res) => {
    const { id:taskID } = req.params;

    res.status(200).json({ success:true, msg:`Deleting task ${taskID} `});
};

module.exports = {
    getTask,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
};
