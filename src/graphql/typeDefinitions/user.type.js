const { gql } = require("apollo-server");

module.exports = gql`
# QUERY TYPES
type User {
  _id: String
  name: String
  username: String
}

# INPUT TYPES
input NewUserInput {
  name: String!
  username: String!
  password: String!
}

input UserQueryFilterInput {
  name: String
  username: String
}
`;
