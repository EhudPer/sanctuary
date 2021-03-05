"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnimalsByIds = exports.getUserById = void 0;
const tslib_1 = require("tslib");
const user_1 = require("../../models/user");
const animal_1 = require("../../models/animal");
exports.getUserById = (userId) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.UserModel.findOne({ _id: userId });
        const userObject = user.toObject();
        const createdAnimalsWithDetails = exports.getAnimalsByIds.bind(this, userObject.createdAnimals);
        const userWithoutPassword = Object.assign(Object.assign({}, userObject), { password: null, createdAnimals: createdAnimalsWithDetails });
        return userWithoutPassword;
    }
    catch (error) {
        throw error;
    }
});
exports.getAnimalsByIds = (animalsIds) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const animals = yield animal_1.AnimalModel.find({ _id: { $in: animalsIds } });
        const animalsWithCreatorInfo = yield animals.map((animal) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const animalWithCreatorInfo = Object.assign(Object.assign({}, animal.toObject()), { creator: exports.getUserById.bind(this, animal.toObject().creator) });
            return animalWithCreatorInfo;
        }));
        return animalsWithCreatorInfo;
    }
    catch (error) {
        throw error;
    }
});
//# sourceMappingURL=merge.js.map