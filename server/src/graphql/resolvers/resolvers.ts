import {
  getAnimals,
  getAnimal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} from "./animals";
import {
  getProductionPortAndHost,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login,
  validateToken,
  signGoogle,
  linkPassword,
} from "./users";

const resolvers = {
  Query: {
    animals: getAnimals,
    animal: getAnimal,
    getProductionPortAndHost,
    users: getUsers,
    user: getUser,
    login,
    validateToken,
    signGoogle,
    linkPassword,
  },
  Mutation: {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    createUser,
    updateUser,
    deleteUser,
  },
};

export default resolvers;
