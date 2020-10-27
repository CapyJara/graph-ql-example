const { User, userMutations, userQueries } = require('./user.resolvers')
const { Garden, gardenMutations, gardenQueries } = require('./garden.resolvers');

module.exports = {
  Query: {
    ...userQueries,
    ...gardenQueries,
  },
  Mutation: {
    ...userMutations,
    ...gardenMutations
  },
  User,
  Garden,
};