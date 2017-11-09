import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString
} from 'graphql';

import speakerQuery from '../queries/speaker';

const TalkType = new GraphQLObjectType({
    name: 'TalkType',
    description: 'Type describes idea of talk',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        speakerId: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        speaker: speakerQuery,
    },
});

export default TalkType;
