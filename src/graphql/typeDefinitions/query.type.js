const { gql } = require("apollo-server");

module.exports = gql`
type Query @auth {
  userFindOne(user: UserQueryFilterInput!): User
  usersFindMany(user: UserQueryFilterInput): [User]

  gardenFindOne(garden: GardenQueryFilterInput!): Garden
  gardenFindMany(garden: GardenQueryFilterInput): [Garden]
}
`;
