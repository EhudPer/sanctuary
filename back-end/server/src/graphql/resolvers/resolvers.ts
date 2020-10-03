import { AnimalModel } from '../../models/animal';
import * as mongoose from 'mongoose';

// Remember to implement error handaling in back and front end
const getAnimals = async () => AnimalModel.find({});

const getAnimal = async (root, data: any) =>
    AnimalModel.findOne({ _id: data._id });

const createAnimal = async (root, { input }) => {
    console.log(input);

    return AnimalModel.create({
        _id: mongoose.Types.ObjectId(),
        name: input.name,
        type: input.type,
        image_url: input.image_url
    });
};

const updateAnimal = async (root, { _id, input }) =>
    AnimalModel.findOneAndUpdate({ _id }, input);

// Remember later to split resolvers to different files.
const resolvers = {
    Query: {
        animals: getAnimals,
        animal: getAnimal
    },
    Mutation: {
        createAnimal,
        updateAnimal
    }
};

export default resolvers;
