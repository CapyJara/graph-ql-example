const { users } = require('../../data/seed/seedData')
const { username, password } = users[0]

module.exports = {
  endpoint: '/graphql',
  query: `
# Welcome to the Go GraphQL Playground

# Get a user
{
  userFindOne(id: "5f961c12bd017484c0ae5afa") {
    name
    username
  }
}
`,
  name: 'welcome',
  headers: {
    // **************************************        
    // ***** SEE AUTH DIRECTIVE WARNING *****
    // **************************************
    username,
    password,
    // *************************************
    // * REPLACE HEADERS TO MATCH NEW AUTH *
    // *************************************
  }
};
