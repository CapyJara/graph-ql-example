const { gql } = require("apollo-server");

module.exports = gql`
# QUERY TYPES
type Shed {
  _id: ID
  owner: User
  garden: Garden
  label: String
  type: Shed
  tools(paging: OffsetLimitPaging): [Tool]
}

# INPUT TYPES
input NewShedInput {
  garden: ID!
  label: String!
  type: String!
}

input ShedQueryFilterInput {
  _id: ID
  owner: ID
  garden: ID
  label: String
  type: String
}
`;