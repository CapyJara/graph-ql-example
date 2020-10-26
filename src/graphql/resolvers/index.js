const QueryResolvers = require('./query.resolvers')
const MutationResolvers = require('./mutation.resolvers')

module.exports = {
  Query: QueryResolvers,
  Mutation: MutationResolvers
};