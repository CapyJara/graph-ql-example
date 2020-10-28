const { gql } = require("apollo-server");

module.exports = gql`
# QUERY TYPES
type Garden {
  _id: ID
  owner: User
  name: String
  type: String
}

# INPUT TYPES
input NewGardenInput {
  name: String!
  type: String!
}

input GardenQueryFilterInput {
  owner: String
  name: String
  type: String
}
`;