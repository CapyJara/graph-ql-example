const ShedModel = require('../../data/shed');
const UserModel = require('../../data/user');
const GardenModel = require('../../data/garden');
const ToolModel = require('../../data/tool');
const { getOffsetLimit } = require('../../utils/tabs/constants/paging');

const Shed = {
  owner: async({ owner }) => await UserModel.findOne({ _id: owner }),
  garden: async({ garden }) => await GardenModel.find({ _id: garden }),
  tools: async({ _id }, { paging }) => {
    const { offset, limit } = getOffsetLimit(paging);

    return await ToolModel
      .find({ shed: _id })
      .skip(offset)
      .limit(limit);
  },
};

const shed = async(_, { shed }) => await ShedModel.findOne(shed);

const sheds = async(_, { shed, paging }) => {
  const { offset, limit } = getOffsetLimit(paging);

  return await ShedModel
    .find(shed)
    .skip(offset)
    .limit(limit);
};

const shedCreate = async(_, { shed }, { user }) =>
  await ShedModel.create({ ...shed, owner: user._id });

const shedUpdate = async(_, { shed }, { user }) =>
  await ShedModel.findOneAndUpdate(
    { _id: shed._id, owner: user._id },
    { ...shed, owner: user._id },
    { new: true });

module.exports = {
  Shed,
  shedQueries: {
    shed,
    sheds,
  },
  shedMutations: {
    shedCreate,
    shedUpdate,
  }
};
