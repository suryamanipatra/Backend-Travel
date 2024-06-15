const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// Business Logic

exports.createComment = async (req, res) => {
    try {
        // Fetch data from request body
        const { post, user, body } = req.body;
        
        // Create a comment object
        const comment = new Comment({
            post, user, body
        });

        // Save the comment to the DB
        const savedComment = await comment.save();

        // Find the post by ID and add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: savedComment._id } },
            { new: true }
        )
        .populate("comments"); // Populate the comments array with comment documents
        
        res.json({
            post: updatedPost,
        });
    } catch (error) {
        return res.status(500).json({
            error: "Error while creating Comment...",
            details: error.message
        });
    }
}
