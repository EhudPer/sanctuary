"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animals_1 = require("./animals");
const users_1 = require("./users");
const resolvers = {
    Query: {
        animals: animals_1.getAnimals,
        animal: animals_1.getAnimal,
        users: users_1.getUsers,
        user: users_1.getUser,
        login: users_1.login,
        validateToken: users_1.validateToken,
        signGoogle: users_1.signGoogle,
        linkPassword: users_1.linkPassword,
    },
    Mutation: {
        createAnimal: animals_1.createAnimal,
        updateAnimal: animals_1.updateAnimal,
        deleteAnimal: animals_1.deleteAnimal,
        createUser: users_1.createUser,
        updateUser: users_1.updateUser,
        deleteUser: users_1.deleteUser,
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map