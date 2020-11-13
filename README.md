# graph-ql-example
Graphql example using Apollo framework

## Collections
- Running a mongo database with 4 collections, users, gardens, sheds and tools
- Seed data functions

## Whats in this example
  - Apollo server setup
  - Multi env support
  - Resolver and Type files
  - Basic directive usage (a very poor auth implementation)
  - Paging on queries and fields
  - Tabs in gql playground

  ## Setup
  - Clone repository
  - Run `npm install` to install dependencies
  - Add .env.development file, and optional .env.production file, following .env.example
  - (optional) `npm run seedData` to seed your data base
  - Run `npm run dev` to run dev server locally on port 3003
  - Run `npm run prod` to run prod server locally on port 3003
  - Open browser at `http://localhost:3003/` to use playground
