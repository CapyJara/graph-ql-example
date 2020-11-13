const { gql } = require('apollo-server');

module.exports = gql`
type Query @auth {
  user(user: UserQueryFilterInput!): User
  users(user: UserQueryFilterInput, paging: OffsetLimitPaging): [User]
}
`;
