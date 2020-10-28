const UserModel = require('../../data/user');

const User = {}

const user = async (_, { user }) => await UserModel.findById(user);
const users = async (_, { user }) => await UserModel.find(user);

const userCreate = async (_, { user }) => await UserModel.create(user);

module.exports = {
  User,
  userQueries: {
    user,
    users,
  },
  userMutations: {
    userCreate
  }
};
