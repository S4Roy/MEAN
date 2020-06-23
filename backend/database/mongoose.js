const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/user', {useNewUrlParser: true, useUnifiedTopology: true} )
        .then(() => console.log('Database Connected'))
        .catch((error) => console.log('error'))
