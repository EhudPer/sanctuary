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

// import fs from "fs";
import * as https from "https";
import * as http from "http";
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
  const configurations = {
    // Note: You may need sudo to run on port 443
    production: { ssl: true, port: process.env.PORT, hostname: "localhost" },
    development: { ssl: false, port: 8000, hostname: "localhost" },
  };

  const environment = process.env.NODE_ENV || "production";
  const config = configurations[environment];

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

  const apollo = new ApolloServer({
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

  apollo.applyMiddleware({ app, path: "/graphql" });

  // Create the HTTPS or HTTP server, per configuration
  let server;
  if (config.ssl === true) {
    // Assumes certificates are in a .ssl folder off of the package root. Make sure
    // these files are secured.
    server = https.createServer(
      {
        key: process.env.SSL_SERVER_KEY,
        cert: process.env.SSL_SERVER_CRT,
      },
      app
    );
  } else {
    server = http.createServer(app);
  }

  // server.listen({ port: process.env.PORT || 8000 }, () => {
  server.listen({ port: config.port }, () => {
    console.log(
      "🚀 Server ready at",
      `http${config.ssl ? "s" : ""}://${config.hostname}:${config.port}${
        apollo.graphqlPath
      }`
    );
  });
};

start();
