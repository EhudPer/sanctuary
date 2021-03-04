"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = require("express");
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = tslib_1.__importDefault(require("./graphql/schema/schema"));
const resolvers_1 = tslib_1.__importDefault(require("./graphql/resolvers/resolvers"));
const app = express();
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
});
server.applyMiddleware({ app, path: '/graphql' });
app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});
//# sourceMappingURL=index.js.map