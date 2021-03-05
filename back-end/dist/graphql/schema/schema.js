"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("graphql-import-node");
// import "../../../../node_modules/graphql-import-node";
const animalInputSchema = tslib_1.__importStar(require("./animal/AnimalInput.graphql"));
const animalSchema = tslib_1.__importStar(require("./animal/Animal.graphql"));
const userInputSchema = tslib_1.__importStar(require("./user/UserInput.graphql"));
const userSchema = tslib_1.__importStar(require("./user/User.graphql"));
const authDataSchema = tslib_1.__importStar(require("./auth-data/AuthData.graphql"));
const tokenAndPasswordSchema = tslib_1.__importStar(require("./auth-data/TokenAndPassword.graphql"));
const querySchema = tslib_1.__importStar(require("./Query.graphql"));
const mutationSchema = tslib_1.__importStar(require("./Mutation.graphql"));
const schema = [
    animalInputSchema,
    animalSchema,
    userInputSchema,
    userSchema,
    authDataSchema,
    tokenAndPasswordSchema,
    querySchema,
    mutationSchema,
];
exports.default = schema;
//# sourceMappingURL=schema.js.map