import * as mongoose from "mongoose";
import * as jwt from "jsonwebtoken";

// import { AnimalModel } from "../../models/animal";
import { UserModel } from "../../models/user";

import {
  encryptPassword,
  testIfUserPasswordIsValid,
} from "../../helper-functions/index";
// import { getUserById, getAnimalsByIds } from "./merge";

export const getUsers = async () => {
  const fetchedUsers = await UserModel.find({}).populate("createdAnimals");
  const fetchedUsersWithoutPasswords = fetchedUsers.map((user) => {
    const userObject = user.toObject();
    userObject.password = null;
    return userObject;
  });

  return fetchedUsersWithoutPasswords;
};

export const getUser = async (root, data: any) => {
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

export const createUser = async (root, { input }) => {
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

export const updateUser = async (root, { _id, input }) => {
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

export const login = async (root, { input }) => {
  try {
    // console.log('login email: ', email, 'login password: ', password);
    console.log("input: ", input);
    const { email, password } = input;
    const user = await UserModel.findOne({ email });
    const wrongCredentialsErrorMessage = "Wrong credentials!.";
    if (user) {
      const isUserPasswordValid = await testIfUserPasswordIsValid(
        user.toObject().password,
        password
      );

      if (isUserPasswordValid) {
        const token = jwt.sign(
          {
            userId: user.toObject()._id.toString(),
            email: user.toObject().email,
          },
          process.env.JWT_PRIVATE_KEY,
          { expiresIn: "1h" }
        );
        return {
          userId: user.toObject()._id,
          token,
          tokenExpiration: 1,
        };
      } else {
        throw new Error(wrongCredentialsErrorMessage);
      }
    } else {
      throw new Error(wrongCredentialsErrorMessage);
    }
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (root, { _id }) => {
  const deletedUser = await UserModel.findOneAndDelete({ _id });

  const deletedUserWithoutPassword = {
    ...deletedUser.toObject(),
    password: null,
  };
  return deletedUserWithoutPassword;
};
