import * as mongoose from "mongoose";

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

export const UserModel = mongoose.model("User", userSchema); // create and export the model
