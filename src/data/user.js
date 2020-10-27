const mongoose = require('mongoose');

const userSchema = {
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true }, // BAD PRACTICE ALERT, DO NOT USE THIS - Pick your own Auth system
};

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
