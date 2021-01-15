import {
  getAnimals,
  getAnimal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} from "./animals";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "./users";

const resolvers = {
  Query: {
    animals: getAnimals,
    animal: getAnimal,
    users: getUsers,
    user: getUser,
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
