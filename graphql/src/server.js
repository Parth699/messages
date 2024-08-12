import mongoose from 'mongoose';
import {ApolloServer} from 'apollo-server';
import mergedSchema from './schema/index.js';
import resolvers from './resolver/index.js';

// const MONGODB_URI = 'mongodb://parthvasani678:1530456075@cluster0.2bmdmyl.mongodb.net/?retryWrites=true&w=majority&appName=Temp';
const MONGODB_URI = 'mongodb://localhost:27017/Temp'
const PORT = 8000;


const server = new ApolloServer({
    typeDefs: mergedSchema,
    resolvers: resolvers,
});


mongoose.connect(MONGODB_URI).then(() => {
    console.log('Mongodb connected.');
    // return startStandaloneServer(server, {listen: PORT})
    return server.listen(PORT);
}).then((res) => {
    console.log(`App running on port ${res.url}`);
});

