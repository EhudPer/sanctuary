"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = exports.linkPasswordToUser = exports.createNewUserByGoogle = exports.checkIfGoogleUserExist = exports.googleLinkPassword = exports.googleSigninOrSignup = exports.testIfGoogleTokenIsValid = exports.testIfUserPasswordIsValid = exports.encryptPassword = void 0;
const tslib_1 = require("tslib");
const bcrypt = tslib_1.__importStar(require("bcryptjs"));
const jwt = tslib_1.__importStar(require("jsonwebtoken"));
const google_auth_library_1 = require("google-auth-library");
const user_1 = require("../models/user");
const typegoose_1 = require("@typegoose/typegoose");
const client = new google_auth_library_1.OAuth2Client(process.env.OAUTH_CLIENT_ID);
exports.encryptPassword = (unencryptedPassword) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const encryptedPassword = yield bcrypt.hash(unencryptedPassword, 12);
        return encryptedPassword;
    }
    catch (error) {
        throw error;
    }
});
exports.testIfUserPasswordIsValid = (userDbPassword, recievedLoginUserPassword) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield bcrypt.compare(recievedLoginUserPassword, userDbPassword);
    }
    catch (error) {
        throw error;
    }
});
exports.testIfGoogleTokenIsValid = (token) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const ticket = yield client.verifyIdToken({
            idToken: token,
            audience: process.env.OAUTH_CLIENT_ID,
        });
        return ticket.getPayload();
    }
    catch (error) {
        throw error;
    }
});
exports.googleSigninOrSignup = (token) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const googleUserFromToken = yield exports.testIfGoogleTokenIsValid(token);
        let googleUser = yield exports.checkIfGoogleUserExist(googleUserFromToken.email);
        if (!googleUser) {
            googleUser = yield exports.createNewUserByGoogle(googleUserFromToken);
        }
        const appToken = yield exports.createToken(googleUser.toObject()._id.toString(), googleUser.toObject().email);
        return {
            token: appToken,
            showToast: googleUser.toObject().password !== "null" ? true : false,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.googleLinkPassword = (token, password) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const googleUserFromToken = yield exports.testIfGoogleTokenIsValid(token);
        let googleUser = yield exports.checkIfGoogleUserExist(googleUserFromToken.email);
        if (!googleUser) {
            googleUser = yield exports.createNewUserByGoogle(googleUserFromToken);
        }
        yield exports.linkPasswordToUser(googleUser, password);
        const appToken = yield exports.createToken(googleUser.toObject()._id.toString(), googleUser.toObject().email);
        return {
            token: appToken,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.checkIfGoogleUserExist = (email) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_1.UserModel.findOne({ email });
    }
    catch (error) {
        throw error;
    }
});
exports.createNewUserByGoogle = (googleUser) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = googleUser;
        const createdUser = yield user_1.UserModel.create({
            _id: typegoose_1.mongoose.Types.ObjectId(),
            email,
            password: "null",
            createdAnimals: [],
        });
        return createdUser;
    }
    catch (error) {
        throw error;
    }
});
exports.linkPasswordToUser = (googleUser, password) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        googleUser.password = yield exports.encryptPassword(password);
        yield user_1.UserModel.findOneAndUpdate({ _id: googleUser._id }, googleUser);
    }
    catch (error) {
        throw error;
    }
});
exports.createToken = (userId, email) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield jwt.sign({
            userId,
            email,
        }, process.env.JWT_PRIVATE_KEY, { expiresIn: "1h" });
    }
    catch (error) {
        throw error;
    }
});
//# sourceMappingURL=index.js.map