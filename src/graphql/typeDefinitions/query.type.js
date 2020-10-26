const { gql } = require("apollo-server");

module.exports = gql`
type Query @auth {
  userFindOne(id: String!): User
}
`;
