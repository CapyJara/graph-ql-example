const { gql } = require('apollo-server');

module.exports = gql`
type Query @auth {
  user(user: UserQueryFilterInput!): User
  users(user: UserQueryFilterInput, paging: OffsetLimitPaging): [User]
  
  dog(dog: DogQueryFilterInput!): Dog
  dogs(dog: DogQueryFilterInput, paging: OffsetLimitPaging): [Dog]
  
  toy(toy: ToyQueryFilterInput!): Toy
  toys(toys: ToyQueryFilterInput, paging: OffsetLimitPaging): [Toy]
}
`;
