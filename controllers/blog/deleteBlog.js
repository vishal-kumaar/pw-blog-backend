import asyncHanlder from "../../utils/asyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import Blog from "../../schemas/blog.schema.js";

/***************************************************
 * @DELETE_BLOG
 * @method DELETE
 * @route /api/blog/:blogId
 * @description Delete blog controller to delete blog by blog id
 * @parameters blog Id
 * @return Blog object
 ************************************************/

const deleteBlog = asyncHanlder(async (req, res) => {
  const { user } = req;
  const { blogId } = req.params;

  const blog = await Blog.findById(blogId);

  if (!blog) {
    throw new CustomError("Blog not found", 404);
  }

  if (blog.authorId !== user._id){
    throw new CustomError("You don't have permission to delete this blog.", 403)
  }
  
  const detetedBlog = await Blog.findByIdAndDelete(blogId);

  res.status(200).json({
    success: true,
    message: "Blog deleted successfully",
    blog: detetedBlog
  });
});

export default deleteBlog;
