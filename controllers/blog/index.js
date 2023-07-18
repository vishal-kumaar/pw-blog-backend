import addBlog from "./addBlog.js";
import getAllBlog from "./getAllBlog.js";
import getBlogById from "./getBlogById.js";
import getBlogByAuthorId from "./getBlogByAuthorId.js";
import updateBlog from "./updateBlog.js";
import deleteBlog from "./deleteBlog.js";

const blogController = {
  addBlog,
  getAllBlog,
  getBlogById,
  getBlogByAuthorId,
  updateBlog,
  deleteBlog,
};

export default blogController;
