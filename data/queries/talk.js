import {
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql'

import TalkType from '../types/TalkType';
import db from '../db/db'

var talk = {
    type: new GraphQLList(TalkType),
    description: "Returns the list of all talks",
    resolve: function(root) {
        return new Promise(function(resolve, reject) { // Notice the promise here, it is to handle async work.
                resolve(db.talks);
        });
    },
};

export default talk;
