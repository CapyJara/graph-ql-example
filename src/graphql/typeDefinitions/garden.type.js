const { gql } = require('apollo-server');

module.exports = gql`
# QUERY TYPES
type Garden {
  _id: ID
  owner: User
  name: String
  type: String
}

# INPUT TYPES
input GardenNewInput {
  name: String!
  type: String!
}

input GardenUpdateInput {
  name: String
  type: String
}

input GardenQueryFilterInput {
  _id: ID
  owner: String
  name: String
  type: String
}
`;
