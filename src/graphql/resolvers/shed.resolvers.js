const ShedModel = require('../../data/shed');
const GardenModel = require('../../data/garden');
const ToolModel = require('../../data/tool');
const { DEFAULT_PAGING_OFFSET, DEFAULT_PAGING_LIMIT } = require('../../utils/tabs/constants/paging');

const Shed = {
  owner: async ({ owner }) => await UserModel.findOne({ _id: owner }),
  garden: async ({ garden }) => await GardenModel.find({ _id: garden }),
  tools: async ({ _id }, { paging }) => {
    const offset = paging ? paging.offset : DEFAULT_PAGING_OFFSET;
    const limit = paging ? paging.limit : DEFAULT_PAGING_LIMIT;

    console.log('_id', _id);
    return await ToolModel
      .find({ shed: _id })
      .skip(offset)
      .limit(limit);
  },
};

const shed = async (_, { shed }) => await ShedModel.findById(shed);
const sheds = async (_, { shed }) => await ShedModel.find(shed);

const shedCreate = async (_, { shed }, { user }) => await ShedModel.create({ ...shed, owner: user._id, tools });

module.exports = {
  Shed,
  shedQueries: {
    shed,
    sheds,
  },
  shedMutations: {
    shedCreate
  }
};
