// Welcome to Launchpad!
// Log in to edit and save pads, run queries in GraphiQL on the right.
// Click "Download" above to get a zip with a standalone Node.js server.
// See docs and examples at https://github.com/apollographql/awesome-launchpad

// graphql-tools combines a schema string with resolvers.
import { makeExecutableSchema } from 'graphql-tools';
import fs from 'fs';
import fetch from 'node-fetch';
import _ from 'lodash';

// Construct a schema, using GraphQL schema language
const typeDefs = fs.readFileSync('src/schema.gql').toString();

//data
const users = [
  {
    uid: '123',
    name: 'djfos',
  },
];

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    users: filter => users.filter(x => {
      if(_.isEmpty(filter) ) return true
      if(filter.id) return filter.id === x.id
      if(filter.name) return filter.name === x.name
    }),
  },
};

// Required: Export the GraphQL.js schema object as "schema"
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
