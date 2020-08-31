import 'graphql-import-node';
import * as animalSchema from './schema/Animal.graphql';
import * as querySchema from './schema/Query.graphql';

const schema = [animalSchema, querySchema];

export default schema;
