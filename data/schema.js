import {
    GraphQLSchema,
    GraphQLObjectType,
} from 'graphql'

// Queries
import event from './queries/event';
import talk from './queries/talk';
import speaker from './queries/speaker';

// This is our schema, list all queries and mutations here
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: 'The list of queries that are supported by this microservice',
        fields: {
            event,
            talk, 
            speaker
        },
    }),
});

export default schema;
