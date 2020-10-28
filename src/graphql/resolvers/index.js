const { User, userMutations, userQueries } = require('./user.resolvers');
const { Garden, gardenMutations, gardenQueries } = require('./garden.resolvers');
const { Shed, shedMutations, shedQueries } = require('./shed.resolvers');
const { Tool, toolMutations, toolQueries } = require('./tool.resolvers');

module.exports = {
  Query: {
    ...userQueries,
    ...gardenQueries,
    ...shedQueries,
    ...toolQueries,
  },
  Mutation: {
    ...userMutations,
    ...gardenMutations,
    ...shedMutations,
    ...toolMutations,
  },
  User,
  Garden,
  Shed,
  Tool,
};
