const { users } = require('../../data/seed/seedData');
const { username, password } = users[0];

module.exports = {
  endpoint: '/graphql',
  query: `# Welcome to the Go GraphQL Playground

# Here's an example of a named query requesting several different queries at once.
# Auth headers are defaulted to an existing seeded user, change them to authenticate you're own user

query nameThisQuery {
  user(user: { username: "SultryCelery76" }) {
    name
    username
  }
  users(paging: { offset: 0, limit: 2 }) {
    name
    username
  }
}

# mutation {
#  userCreate(user: { name: "jim", username: "jimmy66", password: "pass" }) {
#    username
#    name
#    _id
#  }
# }
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
