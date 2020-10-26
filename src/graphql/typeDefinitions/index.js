const { gql } = require("apollo-server");
const queryTypes = require('./query.type');
const mutationTypes = require('./mutation.type');
const userTypes = require('./users.type');
const directiveType = require("./directive.type");

const typeDefs = gql`
  ${queryTypes}
  ${mutationTypes}
  ${userTypes}
  ${directiveType}
`
module.exports = typeDefs;
