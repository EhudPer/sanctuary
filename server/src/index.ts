import express = require('express');
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql/schema/schema';
import resolvers from './graphql/resolvers/resolvers';

const app = express();

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});
