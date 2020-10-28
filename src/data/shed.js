const mongoose = require('mongoose');
const { GARDEN_MODEL, USER_MODEL } = require('./dbConstants');

const shedSchema = {
  owner: { type: mongoose.Schema.Types.ObjectId, ref: USER_MODEL, require: true },
  garden: { type: mongoose.Schema.Types.ObjectId, ref: GARDEN_MODEL, require: true },
  label: { type: String, required: true },
  type: {
    type: String,
    required: true,
    enum: ['private', 'shared', 'community'],
  },
};

const ShedModel = mongoose.model('Shed', shedSchema);

module.exports = ShedModel;
