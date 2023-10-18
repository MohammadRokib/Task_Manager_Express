const Task = require('../models/Task.js');
const asyncWrapper = require('../middlewares/async.js');

//--  Get all task  --\\
const getTask = asyncWrapper(async(req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
});

//--  Create new task  --\\
const createTask = asyncWrapper(async(req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});

//--  Get single task  --\\
const getSingleTask = asyncWrapper(async(req, res) => {
    const { id:taskID } = req.params;
    const task = await Task.findOne({ _id:taskID });
    if (!task) {
        return res.status(404).json({ success:false, msg:`No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
});

//--  Update task  --\\
const updateTask = asyncWrapper(async(req, res) => {
    const { id:taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id:taskID}, req.body, {
        new: true,
        runValidators: true,
    });
    if (!task) {
        return res.status(404).json({ success:false, msg:`No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
});

//--  Delete task  --\\
const deleteTask = asyncWrapper(async(req, res) => {
    const { id:taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id:taskID });
    if (!task) {
        return res.status(404).json({ success:false, msg:`No task with id: ${taskID}` });
    }
    res.status(200).json({ task});
});

module.exports = {
    getTask,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
};
