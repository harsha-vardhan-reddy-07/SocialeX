import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    user: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    likes: {
        type: Array
    },
    comments: {
        type: Object
    }
}, {timestamps: true});

const Post = mongoose.model("posts", postSchema);
export default Post;