const { users } = require('../../data/seed/seedData');
const { username, password } = users[0];

module.exports = {
  endpoint: '/graphql',
  query: `
# Welcome to the Go GraphQL Playground

# Here's an example query requesting from several different resolvers at once.
# Notice how paging can be applied to queries and fields in this schema.
# Use the docs to explore possible queries and mutations
# Auth headers are defaulted to an existing seeded user, change them to authenticate youre own user

{
  user(user: { username: "SultryCelery76" }) {
    name
    username
    gardens {
      name
    }
    sheds {
      tools(paging: { offset: 0, limit: 5 }) {
        name
      }
    }
  }
  gardens(paging: { offset: 0, limit: 3 }) {
    name
    owner {
      name
    }
  }
  tool(tool: { name: "shovel" }) {
    owner {
      name
    }
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
