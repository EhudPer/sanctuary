"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.linkPassword = exports.signGoogle = exports.validateToken = exports.login = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const tslib_1 = require("tslib");
// import * as mongoose from "mongoose";
const mongoose = require("mongoose");
const jwt = tslib_1.__importStar(require("jsonwebtoken"));
const user_1 = require("../../models/user");
const index_1 = require("../../helper-functions/index");
exports.getUsers = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const fetchedUsers = yield user_1.UserModel.find({}).populate("createdAnimals");
    const fetchedUsersWithoutPasswords = fetchedUsers.map((user) => {
        const userObject = user.toObject();
        userObject.password = null;
        return userObject;
    });
    return fetchedUsersWithoutPasswords;
});
exports.getUser = (root, data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const fetchedUser = yield user_1.UserModel.findOne({ _id: data._id }).populate("createdAnimals");
    const fetchedUserWithoutPassword = Object.assign(Object.assign({}, fetchedUser.toObject()), { password: null });
    return fetchedUserWithoutPassword;
});
exports.createUser = (root, { input }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    // try {
    const isUserEmailAlreadyTaken = yield user_1.UserModel.findOne({
        email: input.email,
    });
    if (isUserEmailAlreadyTaken) {
        throw new Error("Email is already taken!");
    }
    else {
        const unencryptedPassword = input.password;
        const encryptedPassword = yield index_1.encryptPassword(unencryptedPassword);
        const createdUser = yield user_1.UserModel.create({
            _id: mongoose.Types.ObjectId(),
            email: input.email,
            password: encryptedPassword,
            createdAnimals: [],
        });
        const token = index_1.createToken(createdUser.toObject()._id.toString(), createdUser.toObject().email);
        return {
            userId: createdUser.toObject()._id,
            token,
            tokenExpiration: 2160,
        };
    }
    // } catch (error) {
    //   throw error;
    // }
});
exports.updateUser = (root, { _id, input }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const encryptedPassword = yield index_1.encryptPassword(input.password);
        const inputCopy = Object.assign({}, input);
        inputCopy.password = encryptedPassword;
        const inputWithEncryptedPassword = inputCopy;
        const updatedUser = yield user_1.UserModel.findOneAndUpdate({ _id }, inputWithEncryptedPassword);
        const updatedUserWithoutPassword = Object.assign(Object.assign({}, updatedUser.toObject()), { password: null });
        return updatedUserWithoutPassword;
    }
    catch (error) {
        throw error;
    }
});
// export const login = async (root, { input }) => {
//   try {
//     console.log("login 1");
//     const { email, password } = input;
//     const user = await UserModel.findOne({ email });
//     const wrongCredentialsErrorMessage = "Wrong credentials!.";
//     if (user) {
//       const isUserPasswordValid = await testIfUserPasswordIsValid(
//         user.toObject().password,
//         password
//       );
//
//       if (isUserPasswordValid) {
//         const token = createToken(
//           user.toObject()._id.toString(),
//           user.toObject().email
//         );
//         return {
//           userId: user.toObject()._id,
//           token,
//           tokenExpiration: 2160,
//         };
//       } else {
//         throw new Error(wrongCredentialsErrorMessage);
//       }
//     } else {
//       throw new Error(wrongCredentialsErrorMessage);
//     }
//   } catch (error) {
//     throw error;
//   }
// };
exports.login = (root, { input }, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    // try {
    const { email, password } = input;
    const { error, user } = yield context.authenticate("graphql-local", {
        email,
        password,
    });
    if (user) {
        const token = index_1.createToken(user.toObject()._id.toString(), user.toObject().email);
        return {
            userId: user.toObject()._id,
            token,
            tokenExpiration: 2160,
        };
    }
    else {
        throw error;
    }
    // const user = await UserModel.findOne({ email });
    // const wrongCredentialsErrorMessage = "Wrong credentials!.";
    // if (user) {
    //   const isUserPasswordValid = await testIfUserPasswordIsValid(
    //       user.toObject().password,
    //       password
    //   );
    //
    //   if (isUserPasswordValid) {
    //     const token = createToken(
    //         user.toObject()._id.toString(),
    //         user.toObject().email
    //     );
    //     return {
    //       userId: user.toObject()._id,
    //       token,
    //       tokenExpiration: 2160,
    //     };
    //   } else {
    //     throw new Error(wrongCredentialsErrorMessage);
    //   }
    // } else {
    //   throw new Error(wrongCredentialsErrorMessage);
    // }
    // } catch (error) {
    //   throw error;
    // }
});
exports.validateToken = (root, { token }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        return result ? true : false;
    }
    catch (error) {
        if (error.message.toString().indexOf("jwt expired") !== -1) {
            return false;
        }
        else {
            throw error;
        }
    }
});
// export const signGoogle = async (root, { token }) => {
//   const validatedAppToken = await googleSigninOrSignup(token);
//   return {
//     token: validatedAppToken.token,
//     showToast: validatedAppToken.showToast,
//   };
// };
exports.signGoogle = (root, { token }, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    console.log("In users signin google resolver");
    const { error, validatedAppToken } = yield context.authenticate("google", {
        scope: ["profile", "email"],
        token,
    });
    console.log("validatedAppToken", validatedAppToken);
    if (validatedAppToken) {
        return {
            token: validatedAppToken.token,
            showToast: validatedAppToken.showToast,
        };
    }
    else {
        throw error;
    }
});
exports.linkPassword = (root, { tokenAndPassword }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    // const validatedAppToken = await googleLinkPassword(
    //   tokenAndPassword.token,
    //   tokenAndPassword.password
    // );
    //
    // return {
    //   token: validatedAppToken.token,
    // };
});
exports.deleteUser = (root, { _id }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield user_1.UserModel.findOneAndDelete({ _id });
    const deletedUserWithoutPassword = Object.assign(Object.assign({}, deletedUser.toObject()), { password: null });
    return deletedUserWithoutPassword;
});
//# sourceMappingURL=users.js.map