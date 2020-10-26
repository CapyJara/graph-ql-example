const { gql } = require("apollo-server");
const queryTypes = require('./query.type');
const mutationTypes = require('./mutation.type');
const userTypes = require('./users.type');
const directiveType = require("./directive.type");

module.exports = [
  queryTypes,
  mutationTypes,
  userTypes,
  directiveType
]
