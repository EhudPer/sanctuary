import * as mongoose from "mongoose";
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
  image_url: {
    type: String,
    required: false,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const AnimalModel = mongoose.model("Animal", animalSchema); // create and export the model
