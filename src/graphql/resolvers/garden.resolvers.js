const GardenModel = require('../../data/garden');
const UserModel = require('../../data/user');
const { shedMutations: { shedCreate } } = require('./shed.resolvers');

const Garden = {
  owner: async ({ owner }) => await UserModel.findOne({ _id: owner }),
}

const garden = async (_, { garden }) => await GardenModel.findById(garden);
const gardens = async (_, { garden }) => await GardenModel.find(garden);

const gardenCreate = async (_, { garden }, { user }) => {
  let shed = {};

  if (garden.shed) {
    const { _id: shedId } = await ShedCreate({}, { shed: garden.shed }, { user })
    shed = { _id: shedId };
  }

  return await GardenModel.create({ ...garden, owner: user._id, ...shed })
};

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
