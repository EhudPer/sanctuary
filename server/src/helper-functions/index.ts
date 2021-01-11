import * as bcrypt from "bcryptjs";

export const encryptPassword = async (unencryptedPassword) => {
  try {
    const encryptedPassword = await bcrypt.hash(unencryptedPassword, 12);
    return encryptedPassword;
  } catch (error) {
    throw error;
  }
};
