const { gql } = require("apollo-server");

module.exports = gql`
# QUERY TYPES
type Tool {
  _id: ID
  owner: User
  shed: Shed
  tool: String
}

# INPUT TYPES
input NewToolInput {
  shed: ID!
  tool: String!
}

input ToolQueryFilterInput {
  owner: String
  shed: String
  tool: String
}
`;
