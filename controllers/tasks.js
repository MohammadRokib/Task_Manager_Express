const Task = require('../models/Task.js');

//--  Get all task  --\\
const getTask = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ success:false, msg:error });
    }
};

//--  Create new task  --\\
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ success:false, msg:error });
    }
};

//--  Get single task  --\\
const getSingleTask = async (req, res) => {
    try {
        const { id:taskID } = req.params;
        const task = await Task.findOne({ _id:taskID });
        if (!task) {
            return res.status(404).json({ success:false, msg:`No task with id: ${taskID}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ success:false, msg:error });
    }
};

//--  Update task  --\\
const updateTask = async (req, res) => {
    try {
        const { id:taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id:taskID}, req.body, {
            new: true,
            runValidators: true,
        });
        if (!task) {
            return res.status(404).json({ success:false, msg:`No task with id: ${taskID}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ success:false, msg:error });
    }
};

//--  Delete task  --\\
const deleteTask = async (req, res) => {
    try {
        const { id:taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id:taskID });
        if (!task) {
            return res.status(404).json({ success:false, msg:`No task with id: ${taskID}` });
        }
        res.status(200).json({ task});
    } catch (error) {
        res.status(500).json({ success:false, msg:error });
    }
};

module.exports = {
    getTask,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
};
