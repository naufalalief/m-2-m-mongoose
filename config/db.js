const mongoose = require('mongoose');

const db_url = 'mongodb+srv://naufalalief087:naufalalief087@cluster0.wignhlt.mongodb.net/Mongoose_test'

const db = mongoose.connect(db_url)

module.exports = db;