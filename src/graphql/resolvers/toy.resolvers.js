const ToyModel = require('../../data/toy');
const UserModel = require('../../data/user');
const getOffsetLimit = require('../../utils/tabs/constants/paging');

const Toy = {
  owner: async({ owner }) => await UserModel.findOne({ _id: owner })
};

const toy = async(_, { toy }) => await ToyModel.findOne(toy);

const toys = async(_, { toy, paging }) => {
  const { offset, limit } = getOffsetLimit(paging);

  return await ToyModel
    .find(toy)
    .skip(offset)
    .limit(limit);
};

const toyCreate = async(_, { toy }) => await ToyModel.create(toy);

module.exports = {
  Toy,
  toyQueries: {
    toy,
    toys,
  },
  toyMutations: {
    toyCreate,
  }
};
