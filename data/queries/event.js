import {
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql'

import EventType from '../types/EventType';
import db from '../db/db'

var event = {
    type: new GraphQLList(EventType),
    description: "Returns the list of all events",
    resolve: function(root) {
        return new Promise(function(resolve, reject) { // Notice the promise here, it is to handle async work.
            resolve(db.events);
        });
    },
};

export default event;
