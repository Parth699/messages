import { gql } from "apollo-server";


const typeDefs = gql`

    input MessageInput {
        userId: String!
        content: String!
        replyTo: String
    }

    type Message {
        id: String!
        userId: String!
        content: String!
        reply: [Message]!
        createdAt: String!
    }
    
    type Query {
        hello: String!
        getMessages(userId: String!): [Message]!
        getReply(messageId: String!): [Message]!
    }

    type Mutation {
        addMessage(message: MessageInput!): Message!
        # upvoteMessage()
    }
`;

export default typeDefs;