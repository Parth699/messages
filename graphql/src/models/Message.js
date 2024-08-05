import mongoose from "mongoose";


const messageSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    upVotes: {
        type: Number,
        default: 0,
    },
    downVotes: {
        type: Number,
        default: 0,
    },
    replyTo: {
        type: mongoose.Types.ObjectId,
        ref: "Message",
    }
},{timestamps: true});

const Message = mongoose.model('Message',messageSchema);

export default Message;