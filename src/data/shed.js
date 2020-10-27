const mongoose = require('mongoose');
const { USER_MODEL, TOOL_MODEL } = require('./dbConstants');

const shedSchema = {
  owner: { type: mongoose.Schema.Types.ObjectId, ref: USER_MODEL, require: true },
  tools: [{ type: mongoose.Schema.Types.ObjectId, ref: TOOL_MODEL }],
  type: {
    type: String,
    required: true,
    enum: ['private', 'shared', 'community'],
  },
};

const ShedModel = mongoose.model('Shed', shedSchema);

module.exports = ShedModel;
