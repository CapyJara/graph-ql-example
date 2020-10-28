const { gql } = require("apollo-server");

module.exports = gql`
# QUERY TYPES
type User {
  _id: String
  name: String
  username: String
  gardens: [Garden]
  sheds: [Shed]
  tools(paging: OffsetLimitPaging): [Tool]
}

# INPUT TYPES
input NewUserInput {
  name: String!
  username: String!
  password: String!
}

input UserQueryFilterInput {
  _id: ID
  name: String
  username: String
}
`;
