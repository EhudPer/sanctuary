"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalModel = void 0;
const tslib_1 = require("tslib");
const mongoose = tslib_1.__importStar(require("mongoose"));
const Schema = mongoose.Schema;
// Create the Schema for Mongoose that corresponds to that type we set in GraphQL
const animalSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    medicineType: {
        type: String,
        required: false,
    },
    dosage: {
        type: Number,
        required: false,
    },
    frequency: {
        type: Number,
        required: false,
    },
    timeUnit: {
        type: String,
        required: false,
    },
    image_url: {
        type: String,
        required: false,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});
exports.AnimalModel = mongoose.model("Animal", animalSchema); // create and export the model
//# sourceMappingURL=animal.js.map