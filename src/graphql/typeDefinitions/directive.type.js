const { gql } = require('apollo-server');

module.exports = gql`
  directive @auth on FIELD_DEFINITION | OBJECT
`;
