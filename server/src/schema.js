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
    phoneNo: '123',
    passwdHash: '123',
    name: 'djfos',
  },
];

// Provide resolver functions for your schema fields

const existUser = data =>
  users.findIndex(
    x => x.phoneNo === data.phoneNo && x.passwdHash === data.password
  );

const resolvers = {
  Query: {
    users: filter =>
      users.filter(x => {
        if (_.isEmpty(filter)) return true;
        if (filter.id) return filter.id === x.id;
        if (filter.name) return filter.name === x.name;
      }),
  },
  Mutation: {
    signIn: data => {
      console.log('signIn data: ', data);

      i = existUser(data);
      return i === -1
        ? {
            token: 'token',
            error: 'error',
            user: null,
            publicActivites: [],
          }
        : {
            token: null,
            error: 'error',
            user: user[i],
            publicActivites: [],
          };
    },
    signUp: data => {
      console.log('signUp data: ', data);
      debugger;
      i = existUser(data);
      if (i === -1) return false;
      users.push(data);
      return true;
    },
    logOut: data => console.log(data),
  },
};

// Required: Export the GraphQL.js schema object as "schema"
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
