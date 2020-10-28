const GardenModel = require('../../data/garden');
const UserModel = require('../../data/user');
const { getOffsetLimit } = require('../../utils/tabs/constants/paging');
const { shedMutations: { shedCreate } } = require('./shed.resolvers');

const Garden = {
  owner: async ({ owner }) => await UserModel.findOne({ _id: owner }),
}

const garden = async (_, { garden }) => await GardenModel.findById(garden);
const gardens = async (_, { garden, paging }) => {
  const { offset, limit } = getOffsetLimit(paging)

  await GardenModel
    .find(garden)
    .skip(offset)
    .limit(limit)
};

const gardenCreate = async (_, { garden }, { user })
  => await GardenModel.create({ ...garden, owner: user._id });

module.exports = {
  Garden,
  gardenQueries: {
    garden,
    gardens
  },
  gardenMutations: {
    gardenCreate
  }
};
