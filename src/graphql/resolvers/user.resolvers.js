const UserModel = require('../../data/user');
const DogModel = require('../../data/dog');
const ToyModel = require('../../data/toy');
const getOffsetLimit = require('../../utils/tabs/constants/paging');

const User = {
  dogs: async({ _id }) => await DogModel.find({ owner: _id }),
  toys: async({ _id }) => await ToyModel.find({ owner: _id })
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

