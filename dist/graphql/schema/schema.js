"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("graphql-import-node");
const animalSchema = tslib_1.__importStar(require("./Animal.graphql"));
const querySchema = tslib_1.__importStar(require("./Query.graphql"));
const schema = [animalSchema, querySchema];
exports.default = schema;
//# sourceMappingURL=schema.js.map