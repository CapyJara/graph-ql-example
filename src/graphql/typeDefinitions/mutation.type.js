const { gql } = require('apollo-server');

module.exports = gql`
type Mutation {
  userCreate(user: UserNewInput!): User
  
  dogCreate(dog: DogNewInput!): Dog
  
  toyCreate(toy: ToyNewInput!): Toy
}
`;
