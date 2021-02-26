import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import { OAuth2Client } from "google-auth-library";
import { UserModel } from "../models/user";
import { mongoose } from "@typegoose/typegoose";

const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID);

export const encryptPassword = async (unencryptedPassword) => {
  try {
    const encryptedPassword = await bcrypt.hash(unencryptedPassword, 12);
    return encryptedPassword;
  } catch (error) {
    throw error;
  }
};

export const testIfUserPasswordIsValid = async (
  userDbPassword,
  recievedLoginUserPassword
) => {
  try {
    return await bcrypt.compare(recievedLoginUserPassword, userDbPassword);
  } catch (error) {
    throw error;
  }
};

export const testIfGoogleTokenIsValid = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.OAUTH_CLIENT_ID,
    });
    return ticket.getPayload();
  } catch (error) {
    throw error;
  }
};

export const googleSigninOrSignup = async (token) => {
  try {
    const googleUserFromToken = await testIfGoogleTokenIsValid(token);
    let googleUser = await checkIfGoogleUserExist(googleUserFromToken.email);

    if (!googleUser) {
      googleUser = await createNewUserByGoogle(googleUserFromToken);
    }

    const appToken = await createToken(
      googleUser.toObject()._id.toString(),
      googleUser.toObject().email
    );
    return {
      token: appToken,
    };
  } catch (error) {
    throw error;
  }
};

export const checkIfGoogleUserExist = async (email) => {
  try {
    return await UserModel.findOne({ email });
  } catch (error) {
    throw error;
  }
};

export const createNewUserByGoogle = async (googleUser) => {
  try {
    const { email } = googleUser;

    const createdUser = await UserModel.create({
      _id: mongoose.Types.ObjectId(),
      email,
      password: "null",
      createdAnimals: [],
    });

    return createdUser;
  } catch (error) {
    throw error;
  }
};

export const createToken = async (userId, email) => {
  try {
    return await jwt.sign(
      {
        userId,
        email,
      },
      process.env.JWT_PRIVATE_KEY,
      { expiresIn: "1h" }
    );
  } catch (error) {
    throw error;
  }
};
