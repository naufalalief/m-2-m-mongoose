const mongoose = require('mongoose');

const db_url = ''

const db = mongoose.connect(db_url)

module.exports = db;