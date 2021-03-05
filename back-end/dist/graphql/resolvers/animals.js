"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAnimal = exports.updateAnimal = exports.createAnimal = exports.getAnimal = exports.getAnimals = void 0;
const tslib_1 = require("tslib");
const mongoose = tslib_1.__importStar(require("mongoose"));
const animal_1 = require("../../models/animal");
const user_1 = require("../../models/user");
const merge_1 = require("./merge");
// remember to set all functions of animal by specific user only and not global of all the users.
exports.getAnimals = (root, data, { req }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!");
        }
        const fetchedAnimals = yield animal_1.AnimalModel.find({ creator: req.userId });
        const fetchedAnimalsWithCreatorDetails = yield fetchedAnimals.map((animal) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const animalObject = animal.toObject();
            const creatorWithDetails = merge_1.getUserById.bind(this, animalObject.creator);
            const animalWithCreatorInfo = Object.assign(Object.assign({}, animalObject), { creator: creatorWithDetails });
            return animalWithCreatorInfo;
        }));
        return fetchedAnimalsWithCreatorDetails;
    }
    catch (error) {
        throw error;
    }
});
exports.getAnimal = (root, data, { req }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (!req.isAuth) {
        throw new Error("Unauthenticated!");
    }
    const animal = yield animal_1.AnimalModel.findOne({ _id: data._id });
    return Object.assign(Object.assign({}, animal.toObject()), { creator: merge_1.getUserById.bind(this, animal.toObject().creator) });
});
exports.createAnimal = (root, { input }, { req }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (!req.isAuth) {
        throw new Error("Unauthenticated!");
    }
    try {
        const createdAnimal = yield animal_1.AnimalModel.create({
            _id: mongoose.Types.ObjectId(),
            name: input.name,
            type: input.type,
            image_url: input.image_url,
            creator: req.userId,
        });
        const createdAnimalObject = createdAnimal.toObject();
        const creatorUser = yield user_1.UserModel.findOne({
            _id: req.userId,
        });
        const creatorUserObject = creatorUser.toObject();
        const creatorUserCreatedAnimalsCopy = [...creatorUserObject.createdAnimals];
        creatorUserCreatedAnimalsCopy.push(createdAnimalObject._id);
        const creatorUserToUpdate = Object.assign(Object.assign({}, creatorUserObject), { createdAnimals: creatorUserCreatedAnimalsCopy });
        yield user_1.UserModel.findOneAndUpdate({ _id: req.userId }, creatorUserToUpdate);
        return Object.assign(Object.assign({}, createdAnimalObject), { creator: merge_1.getUserById.bind(this, createdAnimalObject.creator) });
    }
    catch (error) {
        throw error;
    }
});
exports.updateAnimal = (root, { _id, input }, { req }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (!req.isAuth) {
        throw new Error("Unauthenticated!");
    }
    try {
        const animalToUpdate = yield animal_1.AnimalModel.findOne({ _id });
        const animalToUpdateObject = animalToUpdate.toObject();
        const inputWithCreator = Object.assign(Object.assign({}, input), { creator: animalToUpdateObject.creator });
        const updatedAnimal = yield animal_1.AnimalModel.findOneAndUpdate({ _id }, inputWithCreator);
        return Object.assign(Object.assign({}, updatedAnimal.toObject()), { creator: merge_1.getUserById.bind(this, updatedAnimal.toObject().creator) });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteAnimal = (root, { _id }, { req }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (!req.isAuth) {
        throw new Error("Unauthenticated!");
    }
    try {
        const deletedAnimal = yield animal_1.AnimalModel.findOneAndDelete({ _id });
        const deletedAnimalObject = deletedAnimal.toObject();
        const deletedAnimalCreatorUser = yield user_1.UserModel.findOne(deletedAnimalObject.creator);
        const deletedAnimalCreatorUserObject = deletedAnimalCreatorUser.toObject();
        const deletedAnimalCreatorUserObjectCopy = Object.assign({}, deletedAnimalCreatorUserObject);
        deletedAnimalCreatorUserObjectCopy.createdAnimals.forEach((animal, index) => {
            if (animal.toString() === deletedAnimalObject._id.toString()) {
                deletedAnimalCreatorUserObjectCopy.createdAnimals.splice(index, 1);
            }
        });
        yield user_1.UserModel.findOneAndUpdate({ _id: deletedAnimalCreatorUserObject._id }, deletedAnimalCreatorUserObjectCopy);
        return deletedAnimal;
    }
    catch (error) {
        throw error;
    }
});
//# sourceMappingURL=animals.js.map