const { userQueries, userMutations } = require('./user.resolvers')

module.exports = {
  Query: {
    ...userQueries
  },
  Mutation: {
    ...userMutations
  }
};