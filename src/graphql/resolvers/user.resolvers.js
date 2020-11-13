const UserModel = require('../../data/user');
const getOffsetLimit = require('../../utils/tabs/constants/paging');

const User = {};

const user = async(_, { user }) => await UserModel.findOne(user);

const users = async(_, { user, paging }) => {
  const { offset, limit } = getOffsetLimit(paging);

  return await UserModel
    .find(user)
    .skip(offset)
    .limit(limit);
};

const userCreate = async(_, { user }) => await UserModel.create(user);

module.exports = {
  User,
  userQueries: {
    user,
    users,
  },
  userMutations: {
    userCreate,
  }
};

