const { gql } = require("apollo-server");

module.exports = gql`
# QUERY TYPES
type Garden {
  _id: ID
  owner: User
  shed: Shed
  type: String
}

# INPUT TYPES
input NewGardenInput {
  shed: NewShedInput
  type: String!
}

input GardenQueryFilterInput {
  owner: String
  type: String
}
`;