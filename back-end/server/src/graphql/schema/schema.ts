import "graphql-import-node";
import * as animalInputSchema from "./AnimalInput.graphql";
import * as animalSchema from "./Animal.graphql";
import * as querySchema from "./Query.graphql";
import * as mutationSchema from "./Mutation.graphql";

const schema = [animalInputSchema, animalSchema, querySchema, mutationSchema];

export default schema;
