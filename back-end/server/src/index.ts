import express = require('express');
import { ApolloServer, gql } from 'apollo-server-express';
import schema from './schema';
import resolvers from './resolvers';

const app = express();

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});
