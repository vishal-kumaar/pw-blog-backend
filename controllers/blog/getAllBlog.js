import asyncHanlder from "../../utils/asyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import Blog from "../../schemas/blog.schema.js";

/***************************************************
 * @GET_ALL_BLOG
 * @method GET
 * @route /api/blog
 * @description Get all blog controller for getting all the blogs
 * @parameters none
 * @return Blogs Object
 ************************************************/

const getAllBlog = asyncHanlder(async (_req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    blogs,
  });
});

export default getAllBlog;
