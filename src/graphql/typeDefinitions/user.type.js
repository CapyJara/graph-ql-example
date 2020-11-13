const { gql } = require('apollo-server');

module.exports = gql`
# QUERY TYPES
type User {
  _id: ID
  name: String
  username: String
  dogs: [Dog]
  toys: [Toy]
}

# INPUT TYPES
input UserNewInput {
  name: String!
  username: String!
  password: String!
}

input UserUpdateInput {
  name: String
  username: String
  password: String
}

input UserQueryFilterInput {
  _id: ID
  name: String
  username: String
}
`;
