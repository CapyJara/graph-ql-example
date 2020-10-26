const { model } = require('mongoose');

const {
  userFindOne
} = require('./user.resolvers');

const MutationResolvers = () => ({
  Mutation: {
    userFindOne
  },
});

module.exports = MutationResolvers;
