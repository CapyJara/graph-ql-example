const { User, userMutations, userQueries } = require('./user.resolvers');
const { Dog, dogMutations, dogQueries } = require('./dog.resolvers');
const { Toy, toyMutations, toyQueries } = require('./toy.resolvers');

module.exports = {
  Query: {
    ...userQueries,
    ...dogQueries,
    ...toyQueries,
  },
  Mutation: {
    ...userMutations,
    ...dogMutations,
    ...toyMutations,
  },
  User,
  Dog,
  Toy,
};
