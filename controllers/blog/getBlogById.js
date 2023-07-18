import asyncHanlder from "../../utils/asyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import Blog from "../../schemas/blog.schema.js";

/***************************************************
 * @GET_BLOG_BY_ID
 * @method GET
 * @route /api/blog/:blogId
 * @description Get blog by Id controller to get specific blog by blog id
 * @parameters blog Id
 * @return Blog Object
 ************************************************/

const getBlogById = asyncHanlder(async (req, res) => {
  const { blogId } = req.params;
  const blog = await Blog.findById(blogId);

  if (!blog) {
    throw new CustomError("Blog not found", 404);
  }

  res.status(200).json({
    success: true,
    blog,
  });
});

export default getBlogById;
