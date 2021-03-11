import * as mongoose from "mongoose";
import * as jwt from "jsonwebtoken";

import { UserModel } from "../../models/user";

import {
  createToken,
  encryptPassword,
  testIfUserPasswordIsValid,
  googleSigninOrSignup,
  googleLinkPassword,
} from "../../helper-functions/index";

export const getProductionPortAndHost = async () => {
  try {
    return process.env.PORT;
  } catch (error) {
    throw error;
  }
};

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

      const token = createToken(
        createdUser.toObject()._id.toString(),
        createdUser.toObject().email
      );
      return {
        userId: createdUser.toObject()._id,
        token,
        tokenExpiration: 1,
      };
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
    const { email, password } = input;
    const user = await UserModel.findOne({ email });
    const wrongCredentialsErrorMessage = "Wrong credentials!.";
    if (user) {
      const isUserPasswordValid = await testIfUserPasswordIsValid(
        user.toObject().password,
        password
      );

      if (isUserPasswordValid) {
        const token = createToken(
          user.toObject()._id.toString(),
          user.toObject().email
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

export const validateToken = async (root, { token }) => {
  try {
    const result = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    return result ? true : false;
  } catch (error) {
    if (error.message.toString().indexOf("jwt expired") !== -1) {
      return false;
    } else {
      throw error;
    }
  }
};

export const signGoogle = async (root, { token }) => {
  try {
    console.log("in server signgoogle resolver and the token recived: ", token);
    const validatedAppToken = await googleSigninOrSignup(token);
    console.log(
      "validatedAppToken in signgoogle resolver: ",
      validatedAppToken
    );
    return {
      token: validatedAppToken.token,
      showToast: validatedAppToken.showToast,
    };
  } catch (error) {
    console.log("error here in signGoogle func: ");
    console.log(error);

    throw error;
  }
};

export const linkPassword = async (root, { tokenAndPassword }) => {
  try {
    const validatedAppToken = await googleLinkPassword(
      tokenAndPassword.token,
      tokenAndPassword.password
    );

    return {
      token: validatedAppToken.token,
    };
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
