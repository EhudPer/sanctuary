import express = require("express");
import * as mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
import * as dotenv from "dotenv";

import { isAuth } from "./middleware/is-auth";
import schema from "./graphql/schema/schema";
import resolvers from "./graphql/resolvers/resolvers";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: __dirname + "/.env" });
}

const MONGO_URL = process.env.MONGO_URL;

const start = async () => {
  const app = express();

  app.use(isAuth);
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

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
  });

  server.applyMiddleware({ app, path: "/graphql" });

  app.listen({ port: 8000 }, () => {
    console.log("Apollo Server on http://localhost:8000/graphql");
  });
};

start();
