"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = require("express");
// import * as mongoose from "mongoose";
const mongoose = require("mongoose");
const apollo_server_express_1 = require("apollo-server-express");
const dotenv = tslib_1.__importStar(require("dotenv"));
const is_auth_1 = require("./middleware/is-auth");
const schema_1 = tslib_1.__importDefault(require("./graphql/schema/schema"));
const resolvers_1 = tslib_1.__importDefault(require("./graphql/resolvers/resolvers"));
// import path from "path";
const path = require("path");
if (process.env.NODE_ENV !== "production") {
    dotenv.config({ path: __dirname + "/.env" });
}
const MONGO_URL = process.env.MONGO_URL;
const start = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const app = express();
    app.use(is_auth_1.isAuth);
    if (process.env.NODE_ENV === "production") {
        app.use(express.static(path.join(__dirname, "./dist")));
        app.get("/*", (req, res) => {
            // res.sendFile(path.join(__dirname, "./dist", "index.html"));
            res.sendFile(path.join(__dirname, "./index.html"));
        });
    }
    mongoose.connect(MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    });
    mongoose.connection.on("error", (err) => {
        console.log("err", err);
    });
    mongoose.connection.on("connected", (err, res) => {
        console.log("mongoose is connected");
    });
    mongoose.set("returnOriginal", false);
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: schema_1.default,
        resolvers: resolvers_1.default,
        context: ({ req, res }) => ({ req, res }),
    });
    server.applyMiddleware({ app, path: "/graphql" });
    app.listen({ port: process.env.PORT || 8000 }, () => {
        console.log("Apollo Server on http://localhost:8000/graphql");
    });
});
start();
//# sourceMappingURL=index.js.map