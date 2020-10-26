const { gql } = require("apollo-server");

module.exports = gql`
type Mutation {
  userCreate(user: NewUserInput!): User
}
`;