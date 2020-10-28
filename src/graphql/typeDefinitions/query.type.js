const { gql } = require("apollo-server");

module.exports = gql`
type Query @auth {
  user(user: UserQueryFilterInput!): User
  users(user: UserQueryFilterInput, paging: OffsetLimitPaging): [User]

  garden(garden: GardenQueryFilterInput!): Garden
  gardens(garden: GardenQueryFilterInput, paging: OffsetLimitPaging): [Garden]

  shed(shed: ShedQueryFilterInput!): Shed
  sheds(shed: ShedQueryFilterInput, paging: OffsetLimitPaging): [Shed]

  tool(tool: ToolQueryFilterInput!): Tool
  tools(tool: ToolQueryFilterInput, paging: OffsetLimitPaging): [Tool]
}
`;
