const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;