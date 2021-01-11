import { AnimalModel } from "../../models/animal";
import { UserModel } from "../../models/user";
import { encryptPassword } from "../../helper-functions/index";

import * as mongoose from "mongoose";

// Remember to implement error handling in back and front end

// Animal model related code

const getUserById = async (userId) => {
  try {
    const user = await UserModel.findOne({ _id: userId });
    const userObject = user.toObject();

    const createdAnimalsWithDetails = getAnimalsByIds.bind(
      this,
      userObject.createdAnimals
    );

    const userWithoutPassword = {
      ...userObject,
      password: null,
      createdAnimals: createdAnimalsWithDetails,
    };
    return userWithoutPassword;
  } catch (error) {
    throw error;
  }
};

const getAnimalsByIds = async (animalsIds) => {
  try {
    const animals = await AnimalModel.find({ _id: { $in: animalsIds } });

    const animalsWithCreatorInfo = await animals.map(async (animal) => {
      const animalWithCreatorInfo = {
        ...animal.toObject(),
        creator: getUserById.bind(this, animal.toObject().creator),
      };
      return animalWithCreatorInfo;
    });
    return animalsWithCreatorInfo;
  } catch (error) {
    throw error;
  }
};

const getAnimals = async () => {
  try {
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

const getAnimal = async (root, data: any) => {
  const animal = await AnimalModel.findOne({ _id: data._id });
  return {
    ...animal.toObject(),
    creator: getUserById.bind(this, animal.toObject().creator),
  };
};

const createAnimal = async (root, { input }) => {
  try {
    const createdAnimal = await AnimalModel.create({
      _id: mongoose.Types.ObjectId(),
      name: input.name,
      type: input.type,
      image_url: input.image_url,
      creator: "5ff48977f9a45614da77fb79",
    });

    const createdAnimalObject = createdAnimal.toObject();
    const creatorUser = await UserModel.findOne({
      _id: "5ff48977f9a45614da77fb79",
    });
    const creatorUserObject = creatorUser.toObject();

    const creatorUserCreatedAnimalsCopy = [...creatorUserObject.createdAnimals];
    creatorUserCreatedAnimalsCopy.push(createdAnimalObject._id);
    const creatorUserToUpdate = {
      ...creatorUserObject,
      createdAnimals: creatorUserCreatedAnimalsCopy,
    };

    await UserModel.findOneAndUpdate(
      { _id: "5ff48977f9a45614da77fb79" },
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

const updateAnimal = async (root, { _id, input }) => {
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

const deleteAnimal = async (root, { _id }) => {
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

// User model related code
const getUsers = async () => {
  const fetchedUsers = await UserModel.find({}).populate("createdAnimals");
  const fetchedUsersWithoutPasswords = fetchedUsers.map((user) => {
    const userObject = user.toObject();
    userObject.password = null;
    return userObject;
  });

  return fetchedUsersWithoutPasswords;
};

const getUser = async (root, data: any) => {
  const fetchedUser = await UserModel.findOne({ _id: data._id }).populate(
    "createdAnimals"
  );

  const fetchedUserWithoutPassword = {
    ...fetchedUser.toObject(),
    password: null,
  };
  return fetchedUserWithoutPassword;
};

// Later add a user const speratly and then pass it to the create method (for readabilty) - do it with new user constructor.

const createUser = async (root, { input }) => {
  try {
    const isUserEmailAlreadyTaken = await UserModel.findOne({
      email: input.email,
    });
    if (isUserEmailAlreadyTaken) {
      throw new Error("Email is already taken!");
    } else {
      const unencryptedPassword = input.password;
      const encryptedPassword = await encryptPassword(unencryptedPassword);
      const createdUser = await UserModel.create({
        _id: mongoose.Types.ObjectId(),
        email: input.email,
        password: encryptedPassword,
        createdAnimals: [],
      });

      const createdUserWithoutPassword = {
        ...createdUser.toObject(),
        password: null,
      };

      return createdUserWithoutPassword;
    }
  } catch (error) {
    throw error;
  }
};

const updateUser = async (root, { _id, input }) => {
  try {
    const encryptedPassword = await encryptPassword(input.password);
    const inputCopy = { ...input };
    inputCopy.password = encryptedPassword;
    const inputWithEncryptedPassword = inputCopy;
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id },
      inputWithEncryptedPassword
    );

    const updatedUserWithoutPassword = {
      ...updatedUser.toObject(),
      password: null,
    };
    return updatedUserWithoutPassword;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (root, { _id }) => {
  const deletedUser = await UserModel.findOneAndDelete({ _id });

  const deletedUserWithoutPassword = {
    ...deletedUser.toObject(),
    password: null,
  };
  return deletedUserWithoutPassword;
};

// Remember later to split resolvers to different files.
const resolvers = {
  Query: {
    animals: getAnimals,
    animal: getAnimal,
    users: getUsers,
    user: getUser,
  },
  Mutation: {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    createUser,
    updateUser,
    deleteUser,
  },
};

export default resolvers;
