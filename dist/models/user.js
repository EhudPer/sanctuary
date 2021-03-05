"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const tslib_1 = require("tslib");
const mongoose = tslib_1.__importStar(require("mongoose"));
const Schema = mongoose.Schema;
// Create the Schema for Mongoose that corresponds to that type we set in GraphQL
const userSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAnimals: [
        {
            type: Schema.Types.ObjectId,
            ref: "Animal",
        },
    ],
});
exports.UserModel = mongoose.model("User", userSchema); // create and export the model
//# sourceMappingURL=user.js.map