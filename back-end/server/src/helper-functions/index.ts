import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

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
