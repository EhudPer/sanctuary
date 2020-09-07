import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create the Schema for Mongoose that corresponds to that type we set in GraphQL
const animalSchema = new Schema({

    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: false
    }

})

export const AnimalModel = mongoose.model('Animal', animalSchema); // create and export the model