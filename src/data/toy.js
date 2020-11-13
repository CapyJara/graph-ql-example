const mongoose = require('mongoose');

const toySchema = {
  name: { type: String, required: true },
  type: { type: String, required: true },
  owner: { type: mongoose.Types.ObjectId, ref: 'user' }
};

const UserModel = mongoose.model('Toy', toySchema);

module.exports = UserModel;
