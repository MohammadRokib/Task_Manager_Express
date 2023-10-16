const mongoose = require('mongoose');

const connectDB = url => {
    return mongoose.connect(url, {
            useNewUrlParser: true,    // to disable deprecation messages in log
            useCreateIndex: true,     // to disable deprecation messages in log
            useFindAndModify: false,  // to disable deprecation messages in log
            useUnifiedTopology: true, // to disable deprecation messages in log
        });
};

module.exports = connectDB;
