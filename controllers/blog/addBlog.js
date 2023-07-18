import asyncHanlder from "../../utils/asyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import Blog from "../../schemas/blog.schema.js";

/***************************************************
 * @ADD_BLOG
 * @method POST
 * @route /api/blog/add
 * @description User add blog controller for creating a new blog
 * @parameters user object, title, desc, imgUrl, and content
 * @return Blog Object
 ************************************************/

const addBlog = asyncHanlder(async (req, res) => {
  const { title, desc, imgUrl, content } = req.body;

  if (!title || !imgUrl || !content) {
    throw new CustomError("Title, Image, and Content are required", 400);
  }

  const blog = await Blog.create({
    title,
    desc,
    imgUrl,
    content,
    userId: req.user._id,
  });

  if (!blog) {
    throw new CustomError("Server error! Try again", 500);
  }

  res.status(200).json({
    success: true,
    message: "Blog created successfully",
    blog,
  });
});

export default addBlog;