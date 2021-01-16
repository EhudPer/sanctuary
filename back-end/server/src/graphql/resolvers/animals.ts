import * as mongoose from "mongoose";
import { AnimalModel } from "../../models/animal";
import { UserModel } from "../../models/user";
import { getUserById } from "./merge";

// remember to set all functions of animal by specific user only and not global of all the users.
export const getAnimals = async (root, data: any, { req }) => {
  try {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const fetchedAnimals = await AnimalModel.find({});
    const fetchedAnimalsWithCreatorDetails = await fetchedAnimals.map(
      async (animal) => {
        const animalObject = animal.toObject();
        const creatorWithDetails = getUserById.bind(this, animalObject.creator);

        const animalWithCreatorInfo = {
          ...animalObject,
          creator: creatorWithDetails,
        };
        return animalWithCreatorInfo;
      }
    );
    return fetchedAnimalsWithCreatorDetails;
  } catch (error) {
    throw error;
  }
};

export const getAnimal = async (root, data: any, { req }) => {
  if (!req.isAuth) {
    throw new Error("Unauthenticated!");
  }
  const animal = await AnimalModel.findOne({ _id: data._id });
  return {
    ...animal.toObject(),
    creator: getUserById.bind(this, animal.toObject().creator),
  };
};

export const createAnimal = async (root, { input }, { req }) => {
  console.log("reqnew:", req.isAuth);
  if (!req.isAuth) {
    throw new Error("Unauthenticated!");
  }
  try {
    const createdAnimal = await AnimalModel.create({
      _id: mongoose.Types.ObjectId(),
      name: input.name,
      type: input.type,
      image_url: input.image_url,
      // creator: "5fff1e1b44262d4cf353a026",
      creator: req.userId,
    });

    const createdAnimalObject = createdAnimal.toObject();
    const creatorUser = await UserModel.findOne({
      // _id: "5fff1e1b44262d4cf353a026",
      _id: req.userId,
    });
    const creatorUserObject = creatorUser.toObject();

    const creatorUserCreatedAnimalsCopy = [...creatorUserObject.createdAnimals];
    creatorUserCreatedAnimalsCopy.push(createdAnimalObject._id);
    const creatorUserToUpdate = {
      ...creatorUserObject,
      createdAnimals: creatorUserCreatedAnimalsCopy,
    };

    await UserModel.findOneAndUpdate(
      // { _id: "5fff1e1b44262d4cf353a026" },
      { _id: req.userId },
      creatorUserToUpdate
    );

    return {
      ...createdAnimalObject,
      creator: getUserById.bind(this, createdAnimalObject.creator),
    };
  } catch (error) {
    throw error;
  }
};

export const updateAnimal = async (root, { _id, input }, { req }) => {
  if (!req.isAuth) {
    throw new Error("Unauthenticated!");
  }
  try {
    const animalToUpdate = await AnimalModel.findOne({ _id });
    const animalToUpdateObject = animalToUpdate.toObject();
    const inputWithCreator = {
      ...input,
      creator: animalToUpdateObject.creator,
    };
    const updatedAnimal = await AnimalModel.findOneAndUpdate(
      { _id },
      inputWithCreator
    );
    return {
      ...updatedAnimal.toObject(),
      creator: getUserById.bind(this, updatedAnimal.toObject().creator),
    };
  } catch (error) {
    throw error;
  }
};

export const deleteAnimal = async (root, { _id }, { req }) => {
  if (!req.isAuth) {
    throw new Error("Unauthenticated!");
  }
  try {
    const deletedAnimal = await AnimalModel.findOneAndDelete({ _id });
    const deletedAnimalObject = deletedAnimal.toObject();
    const deletedAnimalCreatorUser = await UserModel.findOne(
      deletedAnimalObject.creator
    );
    const deletedAnimalCreatorUserObject = deletedAnimalCreatorUser.toObject();
    const deletedAnimalCreatorUserObjectCopy = {
      ...deletedAnimalCreatorUserObject,
    };

    deletedAnimalCreatorUserObjectCopy.createdAnimals.forEach(
      (animal, index) => {
        if (animal.toString() === deletedAnimalObject._id.toString()) {
          deletedAnimalCreatorUserObjectCopy.createdAnimals.splice(index, 1);
        }
      }
    );

    await UserModel.findOneAndUpdate(
      { _id: deletedAnimalCreatorUserObject._id },
      deletedAnimalCreatorUserObjectCopy
    );

    return deletedAnimal;
  } catch (error) {
    throw error;
  }
};
