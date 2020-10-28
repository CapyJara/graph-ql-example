const { gql } = require('apollo-server');

module.exports = gql`
input OffsetLimitPaging {
  offset: Int
  limit: Int
}
`;
