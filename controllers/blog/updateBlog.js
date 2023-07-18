import asyncHanlder from "../../utils/asyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import Blog from "../../schemas/blog.schema.js";

/***************************************************
 * @UPDATE_BLOG
 * @method PATCH
 * @route /api/blog/:blogId
 * @description Update blog controller to update blog by blog id
 * @parameters title, desc, imgUrl, content, and blog Id
 * @return Blog Object
 ************************************************/

const updateBlog = asyncHanlder(async (req, res) => {
  const { user } = req;
  const { blogId } = req.params;
  const { title, desc, imgUrl, content } = req.body;

  if (!title || !content) {
    throw new CustomError("Title and content are required", 400);
  }

  const blog = await Blog.findById(blogId);

  if (!blog) {
    throw new CustomError("Blog not found", 404);
  }

  if (blog.userId !== user._id){
    throw new CustomError("You don't have permission to update this blog.", 403)
  }

  blog.title = title;
  blog.desc = desc;
  blog.imgUrl = imgUrl;
  blog.content = content;

  await blog.save();

  res.status(200).json({
    success: true,
    blog,
  });
});

export default updateBlog;
