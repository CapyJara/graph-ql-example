const { gql } = require('apollo-server');

module.exports = gql`
type Mutation @auth {
  userCreate(user: UserNewInput!): User
  userUpdate(user: UserUpdateInput!): User
  
  gardenCreate(garden: GardenNewInput!): Garden
  gardenUpdate(garden: GardenUpdateInput!): Garden

  shedCreate(shed: ShedNewInput!): Shed
  shedUpdate(shed: ShedUpdateInput!): Shed
  
  toolCreate(tool: ToolNewInput!): Tool
  toolUpdate(tool: ToolUpdateInput!): Tool
}
`;
