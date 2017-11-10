import {
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql'

import SpeakerType from '../types/SpeakerType';
import {speakers} from '../db/db'

const speaker = {
    type: new GraphQLList(SpeakerType),
    description: "Returns the list of all speakers",
    resolve: (root) => {
        return new Promise((resolve, reject) => { // Notice the promise here, it is to handle async work.
            if(root) {
                let found = false;
                speakers.forEach((speaker) => {
                    if(speaker.id == root.speakerId) {
                        found = true;
                        return resolve([speaker]);
                    }
                });
                if(!found) {
                    resolve();
                }
            }
            else {
                resolve(speakers);
            }
        });
    },
};

export default speaker;
