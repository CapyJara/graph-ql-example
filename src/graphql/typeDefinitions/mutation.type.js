const { gql } = require("apollo-server");

module.exports = gql`
type Mutation @auth {
  userCreate(user: NewUserInput!): User
  
  gardenCreate(garden: NewGardenInput!): Garden
}
`;