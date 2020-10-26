module.exports = `
  # QUERY TYPES

  type User {
    _id: String
    name: String
    username: String
  }

  # INPUT TYPES
  input NewUserInput {
    name: String!
    username: String!
    password: String!
  }
`;
