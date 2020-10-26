const mongoose = require('mongoose');

const userSchema = {
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true }, // TODO pashhash work
};

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
