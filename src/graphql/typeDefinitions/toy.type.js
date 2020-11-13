const { gql } = require('apollo-server');

module.exports = gql`
# QUERY TYPES
type Toy {
  _id: ID
  name: String
  type: String
  owner: User
}

# INPUT TYPES
input ToyNewInput {
  name: String
  type: String
  owner: ID
}

input ToyUpdateInput {
  name: String
  type: String
}

input ToyQueryFilterInput {
  _id: ID
  name: String
  type: String
}
`;
