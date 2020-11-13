const { User, userMutations, userQueries } = require('./user.resolvers');

// TODO REMOVE
console.log('**********\nRESOLVERS:\n', {
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  },
  User,
});

module.exports = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  },
  User,
};
