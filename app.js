import schema from './data/schema';

const express = require('express');
const graphqlHttp = require('express-graphql');
const app = express();
const port = 8080;

// Setup GraphQL route
app.use('/graphql', graphqlHttp({
    schema,
    graphiql: true, // Set this to false if you don't want graphiql in browser env
}));

// Say hello from root.
app.get('/', (req, res) => res.send('Hello from GoNative 2017!'));

// Start the service.
app.listen(port, () => console.log('Listening on port: ' + port));
