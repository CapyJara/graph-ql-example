const GardenModel = require('../../data/garden');
const UserModel = require('../../data/user');

const Garden = {
  owner: async ({ owner }) => await UserModel.findOne({ _id: owner })
}

const gardenFindOne = async (_, { garden }) => await GardenModel.findById(garden);
const gardenFindMany = async (_, { garden }) => await GardenModel.find(garden);

const gardenCreate = async (_, { garden }, { user }) => await GardenModel.create({ ...garden, owner: user._id });

module.exports = {
  Garden,
  gardenQueries: {
    gardenFindOne,
    gardenFindMany,
  },
  gardenMutations: {
    gardenCreate
  }
};
