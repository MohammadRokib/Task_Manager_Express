const express = require('express');
const router = express.Router();

//--  Importing controllers  --\\
const {
    getTask,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks.js');

//--  Passing controllers to the routers  --\\
router.route('/')
    .get(getTask)
    .post(createTask);

router.route('/:id')
    .get(getSingleTask)
    .patch(updateTask)
    .delete(deleteTask);

//--  Exporting router  --\\
module.exports = router;
