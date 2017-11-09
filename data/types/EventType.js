import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql';

import talk from '../queries/talk';

const EventType = new GraphQLObjectType({
    name: 'EventType',
    description: 'Type describes idea of event',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        location:    { type: new GraphQLNonNull(GraphQLString) },
        talks: talk
    },
});

export default EventType;
