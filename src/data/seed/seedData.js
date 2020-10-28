const UserModel = require('../user');
const GardenModel = require('../garden');
const ShedModel = require('../shed');
const ToolModel = require('../tool');

const seedUserPassword = "beetIt"

const User_0 = new UserModel({
  username: "SultryCelery76",
  name: "Gerald",
  password: seedUserPassword,
})

const User_1 = new UserModel({
  username: "PumpkinTom",
  name: "Emily",
  password: seedUserPassword,
})

const User_2 = new UserModel({
  username: "Party",
  name: "Katya Yekaterina Petrovna Zamolodchikova",
  password: seedUserPassword,
})

const garden_0 = new GardenModel({
  owner: User_0._id,
  name: 'G Town Sproutin',
  type: 'shared'
})

const garden_1 = new GardenModel({
  owner: User_1._id,
  name: 'Gordcopia',
  type: 'community'
})

const shed_0 = new ShedModel({
  owner: User_2._id,
  garden: garden_0._id,
  label: 'front shed',
  type: 'shared'
})
const shed_1 = new ShedModel({
  owner: User_0._id,
  garden: garden_1._id,
  label: 'side shed',
  type: 'shared'
})

const tool_0 = new ToolModel({
  owner: User_2._id,
  shed: shed_0._id,
  name: 'hoe'
})

const tool_1 = new ToolModel({
  owner: User_2._id,
  shed: shed_0._id,
  name: 'shovel'
})

const tool_2 = new ToolModel({
  owner: User_2._id,
  shed: shed_0._id,
  name: 'bolt cutters'
})

const tool_3 = new ToolModel({
  owner: User_0._id,
  shed: shed_0._id,
  name: 'shovel'
})

const tool_4 = new ToolModel({
  owner: User_1._id,
  shed: shed_1._id,
  name: 'large cultivator'
})

const tool_5 = new ToolModel({
  owner: User_1._id,
  shed: shed_1._id,
  name: 'loppers'
})

const tool_6 = new ToolModel({
  owner: User_0._id,
  shed: shed_1._id,
  name: 'pruning saw'
})

const tool_7 = new ToolModel({
  owner: User_0._id,
  shed: shed_1._id,
  name: 'post hole digger'
})

const tool_8 = new ToolModel({
  owner: User_0._id,
  shed: shed_1._id,
  name: 'large axe'
})

const tool_9 = new ToolModel({
  owner: User_0._id,
  shed: shed_1._id,
  name: 'sledge hammer'
})

const tool_10 = new ToolModel({
  owner: User_0._id,
  shed: shed_1._id,
  name: 'chain saw'
})

const tool_11 = new ToolModel({
  owner: User_0._id,
  shed: shed_1._id,
  name: 'wheelbarrow'
})

module.exports = {
  users: [User_0, User_1, User_2],
  gardens: [garden_0, garden_1],
  sheds: [shed_0, shed_1],
  tools: [
    tool_0,
    tool_1,
    tool_2,
    tool_3,
    tool_4,
    tool_5,
    tool_6,
    tool_7,
    tool_8,
    tool_9,
    tool_10,
    tool_11
  ],
}
