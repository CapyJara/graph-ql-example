const { gql } = require("apollo-server");

module.exports = gql`
# QUERY TYPES
type Shed {
  _id: ID
  owner: User
  tools: [Tool]
  type: Shed
}

# INPUT TYPES
input NewShedInput {
  tools: NewToolInput
  type: String!
}

input ShedQueryFilterInput {
  owner: String
  type: String
}
`;