const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = process.env.MONGO_URI;

mongoose
    .connect(connectionString)
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.log(err));
