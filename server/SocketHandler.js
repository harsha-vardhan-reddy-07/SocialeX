
import Post from './models/Post.js'
import User from './models/Users.js'

const SocketHandler = (socket) => {
  
    socket.on('postLiked', async ({userId, postId}) =>{
        await Post.updateOne({_id: postId}, {$addToSet: {likes: userId}});

        socket.emit("likeUpdated");
    })

    socket.on('postUnLiked', async ({userId, postId}) =>{
        await Post.updateOne({_id: postId}, {$pull: {likes: userId}});
        socket.emit("likeUpdated");
    })

    socket.on("fetch-profile", async({_id})=>{
        const user = await User.findOne({_id})
        console.log(user);
        socket.emit("profile-fetched", {profile: user})
    })

    
    socket.on('updateProfile', async ({userId, profilePic, username, about})=>{
        const user = await User.updateOne({_id: userId}, {profilePic: profilePic, username: username, about:about})
        socket.emit("profile-fetched", {profile: user})
    })

    socket.on('user-search', async({username})=>{
        const user = await User.findOne({username:username});
        socket.emit('searched-user', {user});
    })

    socket.on('followUser', async({ownId, followingUserId})=>{
        await User.updateOne({_id: ownId}, {$addToSet: {following: followingUserId}});
        await User.updateOne({_id: followingUserId}, {$addToSet: {followers: ownId}});

        const user = await User.findOne({_id: ownId});
        socket.emit('userFollowed', {following: user.following});
    });

    socket.on('unFollowUser', async({ownId, followingUserId})=>{
        await User.updateOne({_id: ownId}, {$pull: {following: followingUserId}});
        await User.updateOne({_id: followingUserId}, {$pull: {followers: ownId}});

        const user = await User.findOne({_id: ownId});
        socket.emit('userUnFollowed', {following: user.following});
    });


    socket.on('makeComment', async({postId, username, comment})=>{
        await Post.updateOne({_id: postId}, { $push: { comments: [ username, comment]  } });
    });
}

export default SocketHandler;