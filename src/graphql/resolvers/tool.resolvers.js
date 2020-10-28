const ToolModel = require('../../data/tool');
const UserModel = require('../../data/user');
const ShedModel = require('../../data/shed');
const { getOffsetLimit } = require('../../utils/tabs/constants/paging');

const Tool = {
  owner: async({ owner }) => await UserModel.findOne({ _id: owner }),
  shed: async({ shed }) => await ShedModel.findOne({ _id: shed })
};

const tool = async(_, { tool }) => await ToolModel.findOne(tool);

const tools = async(_, { tool, paging }) => {
  const { offset, limit } = getOffsetLimit(paging);

  return await ToolModel
    .find(tool)
    .skip(offset)
    .limit(limit);
};

const toolCreate = async(_, { tool }, { user }) =>
  await ToolModel.create({ ...tool, owner: user._id });

const toolUpdate = async(_, { tool }, { user }) => 
  await ToolModel.findOneAndUpdate(
    { _id: tool._id, owner: user._id },
    { ...tool, owner: user._id },
    { new: true });

module.exports = {
  Tool,
  toolQueries: {
    tool,
    tools,
  },
  toolMutations: {
    toolCreate,
    toolUpdate,
  }
};
