import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString
} from 'graphql';

const SpeakerType = new GraphQLObjectType({
    name: 'SpeakerType',
    description: 'Type describes idea of speaker',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        twitter: { type: GraphQLString },
    },
});

export default SpeakerType;
