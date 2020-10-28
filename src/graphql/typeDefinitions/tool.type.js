const { gql } = require("apollo-server");

module.exports = gql`
# QUERY TYPES
type Tool {
  _id: ID
  owner: User
  shed: Shed
  name: String
}

# INPUT TYPES
input NewToolInput {
  shed: ID!
  name: String!
}

input ToolQueryFilterInput {
  _id: ID
  owner: String
  shed: String
  name: String
}
`;
