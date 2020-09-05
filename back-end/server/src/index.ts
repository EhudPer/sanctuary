import express = require('express');
import { ApolloServer } from 'apollo-server-express';
import * as dotenv from 'dotenv'

import schema from './graphql/schema/schema';
import resolvers from './graphql/resolvers/resolvers';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config({path:__dirname+'/.env'});
}

import { connectMongo } from './utils/mongo-connector';

const start = async () => {

    const mongo = await connectMongo();
    const app = express();

    const server = new ApolloServer({
        context: {mongo},
        typeDefs: schema,
        resolvers,
    });

    server.applyMiddleware({app, path: '/graphql'});

    app.listen({port: 8000}, () => {
        console.log('Apollo Server on http://localhost:8000/graphql');
    });
};

start();