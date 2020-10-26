const {
  userFindOne
} = require('./user.resolvers');

const QueryResolvers = () => ({
  Query: {
    userFindOne
  },
});

module.exports = QueryResolvers;
