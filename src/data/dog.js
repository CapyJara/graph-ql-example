const mongoose = require('mongoose');

const dogSchema = {
  name: { type: String, required: true, unique: true },
  bread: { type: String, required: true },
  owner: { type: mongoose.Types.ObjectId, ref: 'user' },
  toys: [{ type: mongoose.Types.ObjectId, ref: 'toys' }]
};

const UserModel = mongoose.model('Dog', dogSchema);

module.exports = UserModel;
