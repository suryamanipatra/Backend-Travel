// import models

const Post = require("../models/postModel")
const Like = require("../models/likeModel")


// Like a Post

exports.likePost = async (req,res) => {
    try {
        const {post,user} = req.body;
        const like = new Like({
            post,user
        }
        );
        const savedLike = await like.save();

        //update the post collection basis on this
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{likes:savedLike._id }},{new:true}).populate("likes");

        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.status(500).json({
            error:"Error While Liking a Posts..."
        })
    }
}



// unlike a post

exports.unlikePost = async(req,res) =>{
    try{
            const{post,like} = req.body;
            // fiind and delete the like collection 
            const deleteedLike = await Like.findByIdAndDelete({post:post,_id:like});

            //update the post collection
            const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deleteedLike._id}},{new:true});

            res.json({
                post:updatedPost,
            })
    }
    catch(error){
        return res.status(400).json({
            error:"Error While Unliking a Post..."
        })
    }
}





 

exports.dummyLink = (req,res) => {
    res.send("This is My Dummy Page...")
}