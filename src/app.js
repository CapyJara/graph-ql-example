const path = require('path');
require('dotenv').config({ path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`) });
const { ApolloServer } = require('apollo-server');
const resolvers = require('./graphql/resolvers/index');
const typeDefs = require('./graphql/typeDefinitions/index');
const schemaDirectives = require('./graphql/directives/index');
const db = require('./data/db');
const welcomeTab = require('./utils/tabs/welcome.tab');2

db.init();

const app = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  playground: {
    endpoint: '/graphql',
    tabs: [welcomeTab],
  },
  context: (ctx) => ctx,
});

module.exports = app