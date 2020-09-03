import 'graphql-import-node';
import * as animalSchema from './Animal.graphql';
import * as querySchema from './Query.graphql';

const schema = [animalSchema, querySchema];

export default schema;
