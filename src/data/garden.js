const mongoose = require('mongoose');
const { USER_MODEL, SHED_MODEL } = require('./dbConstants');

const gardenSchema = {
  owner: { type: mongoose.Schema.Types.ObjectId, ref: USER_MODEL, require: true },
  name: { type: String, unique: true },
  type: {
    type: String,
    required: true,
    enum: ['private', 'shared', 'community'],
  },
};

const GardenModel = mongoose.model('Garden', gardenSchema);

module.exports = GardenModel;
