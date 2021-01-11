import "graphql-import-node";
import * as animalInputSchema from "./animal/AnimalInput.graphql";
import * as animalSchema from "./animal/Animal.graphql";
import * as userInputSchema from "./user/UserInput.graphql";
import * as userSchema from "./user/User.graphql";
import * as querySchema from "./Query.graphql";
import * as mutationSchema from "./Mutation.graphql";

const schema = [
  animalInputSchema,
  animalSchema,
  userInputSchema,
  userSchema,
  querySchema,
  mutationSchema,
];

export default schema;
