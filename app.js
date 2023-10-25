const express = require('express');
const app = express();

const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connect.js');
const notFound = require('./middlewares/not-found.js');
const errorHandlerMiddleware = require('./middlewares/error-handler.js');
require('dotenv').config();

//--  Middlewares  --\\
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

//--  Routes  --\\
app.use('/api/v1/tasks', tasks);
app.use(errorHandlerMiddleware);
app.use(notFound);

//--  Listener  --\\
const port = process.env.PORT || 5000;
const url = process.env.MONGO_URI;

const start = async () => {
    try {
        await connectDB(url);
        app.listen(port, console.log(`Server is listening to port: ${port}....`));
    } catch (error) {
        console.log(error);
    }
};
start();
