import * as mongodb from 'mongodb';
const ObjectId = mongodb.ObjectID;

const getAnimals = async (root, data, {mongo: {Animals}}) => {
    return await Animals.find({}).toArray();
}

const getAnimal = async (root, data: any, {mongo: {Animals}}) => {
    const { _id } = data;
    const objId = new ObjectId(_id);
    return await Animals.findOne({ _id: objId });
}

const resolvers = {
    Query: {
        animals: getAnimals,
        animal: getAnimal,
    },
};

export default resolvers;
