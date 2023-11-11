const mongoose = require('mongoose');

const mongodbUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tarbot';

mongoose.connect(mongodbUri)
    .then(() => console.info('connected to the database'))
    .catch(error => console.error('An error trying to connect the database'))