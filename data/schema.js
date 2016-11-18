import { GraphQLSchema } from 'graphql';
import QueryType from './types/QueryType';
import MutationType from './types/MutationType';

let Schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});

export default Schema;
