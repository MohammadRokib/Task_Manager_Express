const Task = require('../models/Task.js');

//--  Get all task  --\\
const getTask = async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
};

//--  Create new task  --\\
const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
};

//--  Get single task  --\\
const getSingleTask = async (req, res) => {
    const { id:taskID } = req.params;
    const task = await Task.findOne({ _id:taskID });
    if (!task) {
        return res.status(404).json({ success:false, msg:`No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
};

//--  Update task  --\\
const updateTask = async (req, res) => {
    const { id:taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id:taskID}, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({ task });
};

//--  Delete task  --\\
const deleteTask = async (req, res) => {
    const { id:taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id:taskID });
    if (!task) {
        return res.status(404).json({ success:false, msg:`No task with id: ${taskID}` });
    }
    res.status(200).json({ task});
};

module.exports = {
    getTask,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
};
