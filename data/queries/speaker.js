import {
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql'

import SpeakerType from '../types/SpeakerType';
import db from '../db/db'

var speaker = {
    type: new GraphQLList(SpeakerType),
    description: "Returns the list of all speakers",
    resolve: function(root) {
        return new Promise(function(resolve, reject) { // Notice the promise here, it is to handle async work.
            if(root) {
                db.speakers.forEach(function(speaker) {
                    if(speaker.id == root.speakerId) {
                        console.log('found');
                        resolve([speaker]);
                    }
                });
            }
            else {
                resolve(db.speakers);
            }
        });
    },
};

export default speaker;
