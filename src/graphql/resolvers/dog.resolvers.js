const UserModel = require('../../data/user');
const DogModel = require('../../data/dog');
const ToyModel = require('../../data/toy');
const getOffsetLimit = require('../../utils/tabs/constants/paging');

const Dog = {
  owner: async(dog) => await UserModel.findOne({ _id: dog.owner }),
  toys: async({ toys }) => await ToyModel.find({ _id: toys })
};

const dog = async(_, { dog }) => await DogModel.findOne(dog);

const dogs = async(_, { dog, paging }) => {
  const { offset, limit } = getOffsetLimit(paging);

  return await DogModel
    .find(dog)
    .skip(offset)
    .limit(limit);
};

const dogCreate = async(_, { dog }) => await DogModel.create(dog);

module.exports = {
  Dog,
  dogQueries: {
    dog,
    dogs,
  },
  dogMutations: {
    dogCreate,
    // dogUpdate,
  }
};

