const { users } = require('../../data/seed/seedData')
const { username, password } = users[0]

module.exports = {
  endpoint: '/graphql',
  query: `
# Welcome to the Go GraphQL Playground

# Get a user
{
  user(user: { username: "${username}" }) {
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
