const mongoose = require('mongoose');

module.exports.connection = mongoose.createConnection(process.env.DB_URL);
