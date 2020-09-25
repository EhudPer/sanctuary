import { AnimalModel } from "../../models/animal";

// Remember to implement error handaling in back and front end
const getAnimals = async () => AnimalModel.find({});

const getAnimal = async (root, data: any) =>
  AnimalModel.findOne({ _id: data._id });

const updateAnimal = async (root, { _id, input }) =>
  AnimalModel.findOneAndUpdate({ _id }, input);

// Remember later to split resolvers to different files.
const resolvers = {
  Query: {
    animals: getAnimals,
    animal: getAnimal,
  },
  Mutation: {
    updateAnimal,
  },
};

export default resolvers;
