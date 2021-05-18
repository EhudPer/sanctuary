"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
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
const express = require("express");
// import * as mongoose from "mongoose";
const mongoose = require("mongoose");
// import fs from "fs";
const https = tslib_1.__importStar(require("https"));
const http = tslib_1.__importStar(require("http"));
// import { ApolloServer } from "apollo-server-express";
const apollo_server_express_1 = require("apollo-server-express");
// import { GraphQLErrorTrackingExtension } from "graphql-error-tracking-extension";
// import { ErrorReporting } from "@google-cloud/error-reporting";
// const errorReporting = new ErrorReporting();
const dotenv = tslib_1.__importStar(require("dotenv"));
// import * as cors from "cors";
const is_auth_1 = require("./middleware/is-auth");
const schema_1 = tslib_1.__importDefault(require("./graphql/schema/schema"));
const resolvers_1 = tslib_1.__importDefault(require("./graphql/resolvers/resolvers"));
// import path from "path";
const path = require("path");
if (process.env.NODE_ENV !== "production") {
    dotenv.config({ path: __dirname + "/.env" });
}
const MONGO_URL = process.env.MONGO_URL;
const passport = require("passport");
const graphql_passport_1 = require("graphql-passport");
// import GoogleOauth = require("passport-google-oauth20");
const GoogleStrategy = require("passport-google-oauth20");
// import passportGoogle = require("passport-google-oauth20");
// const { GoogleStrategy } = passportGoogle.Strategy;
const user_1 = require("../src/models/user");
const helper_functions_1 = require("./helper-functions");
const fs = tslib_1.__importStar(require("fs"));
const start = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    // const configurations = {
    //   // Note: You may need sudo to run on port 443
    //   production: {
    //     ssl-localhost: true,
    //     port: process.env.PORT,
    //     hostname: "localhost",
    //   },
    //   development: { ssl-localhost: false, port: 8000, hostname: "localhost" },
    // };
    //
    // const environment = process.env.NODE_ENV || "production";
    // const config = configurations[environment];
    passport.use(new graphql_passport_1.GraphQLLocalStrategy((email, password, done) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const user = yield user_1.UserModel.findOne({ email });
        let isUserPasswordValid;
        if (user) {
            isUserPasswordValid = yield helper_functions_1.testIfUserPasswordIsValid(user.toObject().password, password);
        }
        const error = isUserPasswordValid
            ? null
            : new Error("Wrong credentials!.");
        done(error, user);
    })));
    const googleOptions = {
        // authorizationURL: "https://accounts.google.com/o/oauth2/auth",
        clientID: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        // callbackURL: "http://localhost:8080/animals",
        // callbackURL: "http://localhost:8080/auth/google/redirect",
        callbackURL: "https://localhost:8080/auth/google/callback",
    };
    passport.use(
    // new googleOauth.Strategy(async (token, done) => {
    new GoogleStrategy(googleOptions, (accessToken, refreshToken, profile, cb) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        // const validatedAppToken = await googleSigninOrSignup(token);
        //
        // const error = validatedAppToken
        //   ? null
        //   : new Error("Wrong google login!.");
        // done(error, validatedAppToken);
        console.log("google passport in and the access token: ", accessToken);
    })));
    const app = express();
    app.use(passport.initialize());
    // app.use(cors());
    // app.use(cors({ credentials: true, origin: "http://localhost:8080" }));
    app.use(is_auth_1.isAuth);
    // app.use((req, res, next) => {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header(
    //     "Access-Control-Allow-Headers",
    //     "Origin, X-Requested-With, Content-Type, Accept"
    //   );
    //   next();
    // });
    // app.use((req, res, next) => {
    //   // res.setHeader("Access-Control-Allow-Origin", ["*"]);
    //   // res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    //   // res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    //   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    //   next();
    // });
    // app.options("/*", (req, res, next) => {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    //   res.header(
    //     "Access-Control-Allow-Headers",
    //     "Content-Type, Authorization, Content-Length, X-Requested-With"
    //   );
    //   res.sendStatus(200);
    // });
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
    const apollo = new apollo_server_express_1.ApolloServer({
        typeDefs: schema_1.default,
        resolvers: resolvers_1.default,
        // extensions: [
        //   () =>
        //     new GraphQLErrorTrackingExtension({
        //       maskHeaders: ["x-forwarded-for", "authorization"],
        //       revealErrorTypes: [
        //         SyntaxError,
        //         UserInputError,
        //         AuthenticationError,
        //         ForbiddenError,
        //       ],
        //       onUnrevealedError: (err, originalError) => {
        //         if (originalError) {
        //           errorReporting.report(err.originalError.stack);
        //         } else {
        //           errorReporting.report(err.stack);
        //         }
        //       },
        //     }),
        // ],
        // context: ({ req, res }) => ({ req, res }),
        context: ({ req, res }) => {
            return graphql_passport_1.buildContext({ req, res });
        },
    });
    const corsOptions = {
        // origin: "http://localhost:8080",
        // origin: [
        //   "https://localhost:8000/graphql",
        //   "http://localhost:8080",
        //   // "https://accounts.google.com/o/oauth2/v2/auth",
        // ],
        origin: "*",
        credentials: true,
    };
    apollo.applyMiddleware({
        app,
        // cors: false,
        // cors: {
        // credentials: true,
        // credentials: false,
        // origin: "http://localhost:8000/graphql",
        // origin: "http://localhost:8080",
        // origin: "*",
        // process.env.NODE_ENV === "development"
        //   ? "http://localhost:8080"
        //   : "https://sanctuary-app.herokuapp.com",
        // },
        // cors: {},
        cors: corsOptions,
        path: "/graphql",
    });
    // Create the HTTPS or HTTP server, per configuration
    const sslPrivateKey = fs.readFileSync(path.resolve("server/src/ssl/server.key"));
    const sslCertificate = fs.readFileSync("server/src/ssl/server.cert");
    let server;
    if (process.env.NODE_ENV === "development") {
        // Assumes certificates are in a .ssl-localhost folder off of the package root. Make sure
        // these files are secured.
        server = https.createServer({
            key: sslPrivateKey,
            cert: sslCertificate,
        }, app);
    }
    else {
        server = http.createServer(app);
    }
    server.listen({ port: process.env.PORT || 8000 }, () => {
        // server.listen({ port: config.port }, () => {
        console.log("🚀 Server ready at", `http${process.env.NODE_ENV === "production" ? "s" : "s(local)"}://${process.env.NODE_ENV === "production"
            ? "sanctuary-app.herokuapp.com"
            : "localhost"}:${process.env.PORT || 8000}${apollo.graphqlPath}`);
    });
});
start();
//# sourceMappingURL=index.js.map