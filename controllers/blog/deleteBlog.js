import asyncHanlder from "../../utils/asyncHandler.js";
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
  const { blogId } = req.params;
  
  const blog = await Blog.findByIdAndDelete(blogId);

  res.status(200).json({
    success: true,
    message: "Blog deleted successfully",
    blog
  });
});

export default deleteBlog;
