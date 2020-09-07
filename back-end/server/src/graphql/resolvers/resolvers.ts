import {AnimalModel} from '../../models/animal';

const getAnimals = async () => AnimalModel.find({});

const getAnimal = async (root, data: any) => AnimalModel.findOne({ _id: data._id });

const resolvers = {
    Query: {
        animals: getAnimals,
        animal: getAnimal,
    },
};

export default resolvers;
