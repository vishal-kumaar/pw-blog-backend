import asyncHanlder from "../../utils/asyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import Blog from "../../schemas/blog.schema.js";

/***************************************************
 * @GET_BLOG_BY_USER_ID
 * @method GET
 * @route /api/myblog
 * @description Get blogs by author Id controller to get blog of specific author
 * @parameters Author Id
 * @return Blogs Object
 ************************************************/

const getBlogByAuthorId = asyncHanlder(async (req, res) => {
  const { user } = req;
  const authorId = user._id;

  const blogs = await Blog.find({authorId}).sort({ createdAt: -1 });

  if (blogs.length === 0) {
    throw new CustomError("Blog not found", 404);
  }

  res.status(200).json({
    success: true,
    blogs,
  });
});

export default getBlogByAuthorId;
