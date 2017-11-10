import {
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql'

import EventType from '../types/EventType';
import {events} from '../db/db'

const event = {
    type: new GraphQLList(EventType),
    description: "Returns the list of all events",
    resolve: () => {
        return new Promise((resolve, reject) => { // Notice the promise here, it is to handle async work.
            resolve(events);
        });
    },
};

export default event;
