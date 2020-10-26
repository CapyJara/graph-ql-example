module.exports =`
  type Query {
    userFindOne(id: String!): User @auth
  }
`;
