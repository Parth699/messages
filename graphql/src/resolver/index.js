import { gql } from "apollo-server";
import Message from "../models/Message.js";
import { GraphQLError } from "graphql";
import DataLoader from 'dataloader';



const replyLoader = new DataLoader(async (keys) => {
    console.log('KKK',keys);
    // const result = keys.map((messaegId) => Message.find({replyTo: messageId}));

    // const res = keys.map(async(key) => await Message.find({replyTo: key}));
    const res = await Message.find({replyTo: {$in: keys}});
    
    const result = keys.map((key)=> res.filter((r) => String(r.replyTo) === String(key)));

    return result;
});




const resolvers = {
    Query: {
        hello: () => 'hello',

        getMessages: async (parent, {userId}, context, info) => {
            return await Message.find({userId: userId, replyTo: null});
        },
    
        getReply: async (parent, {messageId}, context, info) => {
            const message = await Message.findOne({_id: messageId});
            console.log(message)
            // if(!message){
            //     throw new GraphQLError(`Message with ${messageId} ID does not exists.`);
            // }

            return await Message.find({replyTo: messageId});
        }
    },

    Mutation: {
        addMessage: async (parent, {message}, context, info) => {
            if(message.replyTo){
                const m = await Message.findOne({_id: message.replyTo});
                if(!m){
                    throw new GraphQLError(`Message with ${message.replyTo} ID does not exists.`);
                }
            }

            return await Message.create(message);
        },

    },

    Message: {
        reply: async (message, args, context, info) => {
            console.log('Fetching message with ', message.id);
            
            return replyLoader.load(message.id);
            
            // return await Message.find({replyTo: message.id});
        }
    }
}

export default resolvers;