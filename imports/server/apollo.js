import { makeExecutableSchema } from 'graphql-tools';
import { createApolloServer } from 'meteor/apollo';

import typeDefs from './schema';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({
  schema,
});
