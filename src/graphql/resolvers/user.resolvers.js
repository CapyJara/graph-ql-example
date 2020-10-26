const UserModel = require('../../data/users');

const userCreate = async (_, { user }) => await UserModel.create(user);

const userFindOne = async (_, { id }) => await UserModel.findById(id);

module.exports = {
  userFindOne,
  userCreate
};
