const express = require('express');
const router = express.Router();

//--  Get all tasks  --\\
router.get('/', (req, res) => {
    res.status(200).json({ success:true, msg:`Getting all tasks` });
});

//--  Create new task  --\\
router.post('/', (req, res) => {
    const { name } = req.body;

    res.status(200).json({ success:true, msg:`Creating new task: ${name}` });
});

//--  Get single task  --\\
router.get('/:id', (req, res) => {
    const { id:taskID } = req.params;

    res.status(200).json({ success:true, msg:`Getting task ${taskID} `});
});

//--  Update task  --\\
router.patch('/:id', (req, res) => {
    const { id:taskID } = req.params;
    const { name } = req.body;

    res.status(200).json({ success:true, msg:`Updating task ${taskID} with ${name} `});
});

//--  Delete task  --\\
router.delete('/:id', (req, res) => {
    const { id:taskID } = req.params;

    res.status(200).json({ success:true, msg:`Deleting task ${taskID} `});
});

//--  Exporting router  --\\
module.exports = router;
