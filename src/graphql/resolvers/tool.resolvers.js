const ToolModel = require('../../data/tool');
const UserModel = require('../../data/user');
const ShedModel = require('../../data/shed');

const Tool = {
  owner: async ({ owner }) => await UserModel.findOne({ _id: owner }),
  shed: async ({ shed }) => await ShedModel.findOne({ _id: shed })
}

const tool = async (_, { tool }) => await ToolModel.findById(tool);
const tools = async (_, { tool }) => await ToolModel.find(tool);

const toolCreate = async (_, { tool }, { user }) => await ToolModel.create({ ...tool, owner: user._id });

module.exports = {
  Tool,
  toolQueries: {
    tool,
    tools,
  },
  toolMutations: {
    toolCreate
  }
};
