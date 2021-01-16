import { UserModel } from "../../models/user";
import { AnimalModel } from "../../models/animal";

export const getUserById = async (userId) => {
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

export const getAnimalsByIds = async (animalsIds) => {
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
