const GardenModel = require('../../data/garden');
const ShedModel = require('../../data/shed');
const ToolModel = require('../../data/tool');
const UserModel = require('../../data/user');
const { getOffsetLimit } = require('../../utils/tabs/constants/paging');

const User = {
  gardens: async({ _id }) => await GardenModel.find({ owner: _id }),
  sheds: async({ _id }) => await ShedModel.find({ owner: _id }),
  tools: async({ _id }, { paging }) => {
    const { offset, limit } = getOffsetLimit(paging);

    return await ToolModel.find({ owner: _id })
      .find(user)
      .skip(offset)
      .limit(limit);
  },
};

const user = async(_, { user }) => await UserModel.findOne(user);

const users = async(_, { user, paging }) => {
  const { offset, limit } = getOffsetLimit(paging);

  return await UserModel
    .find(user)
    .skip(offset)
    .limit(limit);
};

const userCreate = async(_, { user }) => await UserModel.create(user);

const userUpdate = async(_, { user }) => 
  await UserModel.findOneAndUpdate(
    { _id: user._id, owner: user._id },
    { ...user, owner: user._id },
    { new: true });

module.exports = {
  User,
  userQueries: {
    user,
    users,
  },
  userMutations: {
    userCreate,
    userUpdate,
  }
};
