const mongoose = require('mongoose');
const { USER_MODEL, SHED_MODEL } = require('./dbConstants');

const toolSchema = {
  owner: { type: mongoose.Schema.Types.ObjectId, ref: USER_MODEL, require: true },
  shed: { type: mongoose.Schema.Types.ObjectId, ref: SHED_MODEL, require: true },
  name: { type: String, required: true },
};

const ToolModel = mongoose.model('Tool', toolSchema);

module.exports = ToolModel;
