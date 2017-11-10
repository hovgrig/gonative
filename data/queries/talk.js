import {
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql'

import TalkType from '../types/TalkType';
import {talks} from '../db/db'

const talk = {
    type: new GraphQLList(TalkType),
    description: "Returns the list of all talks",
    resolve: () => {
        return new Promise((resolve, reject) => { // Notice the promise here, it is to handle async work.
            resolve(talks);
        });
    },
};

export default talk;
