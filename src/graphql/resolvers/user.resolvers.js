const UserModel = require('../../data/users');

const userFindOne = async (_, { user }) => await UserModel.findById(user);
const usersFindMany = async (_, { user }) => await UserModel.find(user);

const userCreate = async (_, { user }) => await UserModel.create(user);

module.exports = {
  userQueries: {
    userFindOne,
    usersFindMany,
  },
  userMutations: {
    userCreate
  }
};
