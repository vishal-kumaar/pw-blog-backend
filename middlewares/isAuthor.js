import asyncHandler from "../utils/asyncHandler.js";
import CustomError from "../utils/CustomError.js";
import Blog from "../schemas/blog.schema.js";

const isAuthor = asyncHandler(async (req, _res, next) => {
    const {user} = req;
    const {blogId} = req.params;

    
    const blog = await Blog.findById(blogId);
    
    if (!blog){
        throw new CustomError("Blog not found", 404)
    }

    if (!blog.authorId.equals(user._id)){
        throw new CustomError("You are not the author of this blog", 403)
    }
    
    next();
})

export default isAuthor;