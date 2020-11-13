const { gql } = require('apollo-server');

module.exports = gql`
# QUERY TYPES
type Dog {
  _id: ID
  name: String
  bread: String
  owner: User
  toys: User
}

# INPUT TYPES
input DogNewInput {
  name: String!
  bread: String!
  owner: ID
}

input DogUpdateInput {
  owner: UserQueryFilterInput
}

input DogQueryFilterInput {
  _id: ID
  name: String
  bread: String
  owner: ID
}
`;
