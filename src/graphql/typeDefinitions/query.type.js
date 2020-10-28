const { gql } = require("apollo-server");

module.exports = gql`
type Query @auth {
  user(user: UserQueryFilterInput!): User
  users(user: UserQueryFilterInput): [User]

  garden(garden: GardenQueryFilterInput!): Garden
  gardens(garden: GardenQueryFilterInput): [Garden]

  shed(shed: ShedQueryFilterInput!): Shed
  sheds(shed: ShedQueryFilterInput): [Shed]

  tool(tool: ToolQueryFilterInput!): Tool
  tools(tool: ToolQueryFilterInput): [Tool]
}
`;
