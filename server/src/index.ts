// import express = require("express");
// // import * as mongoose from "mongoose";
// import mongoose = require("mongoose");
// // import { ApolloServer } from "apollo-server-express";
// import {
//   ApolloServer,
//   SyntaxError,
//   UserInputError,
//   AuthenticationError,
//   ForbiddenError,
// } from "apollo-server-express";
// import { GraphQLErrorTrackingExtension } from "graphql-error-tracking-extension";
// import { ErrorReporting } from "@google-cloud/error-reporting";
//
// const errorReporting = new ErrorReporting();
//
// import * as dotenv from "dotenv";
// // import * as cors from "cors";
//
// import { isAuth } from "./middleware/is-auth";
// import schema from "./graphql/schema/schema";
// import resolvers from "./graphql/resolvers/resolvers";
// // import path from "path";
// import path = require("path");
//
// if (process.env.NODE_ENV !== "production") {
//   dotenv.config({ path: __dirname + "/.env" });
// }
//
// const MONGO_URL = process.env.MONGO_URL;
//
// const start = async () => {
//   const app = express();
//
//   // app.use(cors());
//   app.use(isAuth);
//
//   if (process.env.NODE_ENV === "production") {
//     // app.use(express.static(path.join(__dirname, "./dist")));
//     app.use(express.static("dist"));
//     // app.get("/*", (req, res) => {
//     // app.get("/", (req, res) => {
//     // res.sendFile(path.join(__dirname, "./dist", "index.html"));
//     app.get("*", (req, res) => {
//       // res.sendFile(path.join(__dirname, "./index.html"));
//       // res.sendFile(path.resolve(__dirname, "dist", "index.html"));
//       res.sendFile(path.resolve(__dirname + "/../dist/index.html"));
//     });
//   }
//
//   mongoose.connect(MONGO_URL, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useFindAndModify: false,
//   });
//
//   mongoose.connection.on("error", (err) => {
//     console.log("err", err);
//   });
//
//   mongoose.connection.on("connected", (err, res) => {
//     console.log("mongoose is connected");
//   });
//
//   mongoose.set("returnOriginal", false);
//
//   const server = new ApolloServer({
//     typeDefs: schema,
//     resolvers,
//     extensions: [
//       () =>
//         new GraphQLErrorTrackingExtension({
//           maskHeaders: ["x-forwarded-for", "authorization"],
//           revealErrorTypes: [
//             SyntaxError,
//             UserInputError,
//             AuthenticationError,
//             ForbiddenError,
//           ],
//           onUnrevealedError: (err, originalError) => {
//             if (originalError) {
//               errorReporting.report(err.originalError.stack);
//             } else {
//               errorReporting.report(err.stack);
//             }
//           },
//         }),
//     ],
//     context: ({ req, res }) => ({ req, res }),
//   });
//
//   server.applyMiddleware({ app, path: "/graphql" });
//
//   app.listen({ port: process.env.PORT || 8000 }, () => {
//     console.log("Apollo Server on http://localhost:8000/graphql");
//   });
// };
//
// start();

import express = require("express");
// import * as mongoose from "mongoose";
import mongoose = require("mongoose");
// import { ApolloServer } from "apollo-server-express";
import {
  ApolloServer,
  SyntaxError,
  UserInputError,
  AuthenticationError,
  ForbiddenError,
} from "apollo-server-express";
import { GraphQLErrorTrackingExtension } from "graphql-error-tracking-extension";
import { ErrorReporting } from "@google-cloud/error-reporting";

const errorReporting = new ErrorReporting();

import * as dotenv from "dotenv";
// import * as cors from "cors";

import { isAuth } from "./middleware/is-auth";
import schema from "./graphql/schema/schema";
import resolvers from "./graphql/resolvers/resolvers";
// import path from "path";
import path = require("path");

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: __dirname + "/.env" });
}

const MONGO_URL = process.env.MONGO_URL;

const start = async () => {
  const app = express();

  // app.use(cors());
  app.use(isAuth);

  if (process.env.NODE_ENV === "production") {
    // app.use(express.static(path.join(__dirname, "./dist")));
    app.use(express.static("dist"));
    // app.get("/*", (req, res) => {
    // app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "./dist", "index.html"));
    app.get("*", (req, res) => {
      // res.sendFile(path.join(__dirname, "./index.html"));
      // res.sendFile(path.resolve(__dirname, "dist", "index.html"));
      res.sendFile(path.resolve(__dirname + "/../dist/index.html"));
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

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    extensions: [
      () =>
        new GraphQLErrorTrackingExtension({
          maskHeaders: ["x-forwarded-for", "authorization"],
          revealErrorTypes: [
            SyntaxError,
            UserInputError,
            AuthenticationError,
            ForbiddenError,
          ],
          onUnrevealedError: (err, originalError) => {
            if (originalError) {
              errorReporting.report(err.originalError.stack);
            } else {
              errorReporting.report(err.stack);
            }
          },
        }),
    ],
    context: ({ req, res }) => ({ req, res }),
  });

  server.applyMiddleware({ app, path: "/graphql" });

  app.listen({ port: process.env.PORT || 8000 }, () => {
    console.log("Apollo Server on http://localhost:8000/graphql");
  });
};

start();
