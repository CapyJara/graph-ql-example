const GardenModel = require('../../data/garden');
const UserModel = require('../../data/user');
const { getOffsetLimit } = require('../../utils/tabs/constants/paging');

const Garden = {
  owner: async({ owner }) => await UserModel.findOne({ _id: owner }),
};

const garden = async(_, { garden }) => await GardenModel.findOne(garden);

const gardens = async(_, { garden, paging }) => {
  const { offset, limit } = getOffsetLimit(paging);

  return await GardenModel
    .find(garden)
    .skip(offset)
    .limit(limit);
};

const gardenCreate = async(_, { garden }, { user }) =>
  await GardenModel.create({ ...garden, owner: user._id });

const gardenUpdate = async(_, { garden }, { user }) => 
  await GardenModel.findOneAndUpdate(
    { _id: garden._id, owner: user._id },
    { ...garden, owner: user._id },
    { new: true });

module.exports = {
  Garden,
  gardenQueries: {
    garden,
    gardens
  },
  gardenMutations: {
    gardenCreate,
    gardenUpdate,
  }
};
