import * as bcrypt from "bcryptjs";

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
