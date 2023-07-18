import register from "./user/register.js";
import login from "./user/login.js";
import logout from "./user/logout.js";
import addBlog from "./blog/addBlog.js";
import getAllBlog from "./blog/getAllBlog.js";
import getBlogById from "./blog/getBlogById.js";
import getBlogByAuthorId from "./blog/getBlogByAuthorId.js";
import updateBlog from "./blog/updateBlog.js";
import deleteBlog from "./blog/deleteBlog.js";

const controllers = {
  register,
  login,
  logout,
  addBlog,
  getAllBlog,
  getBlogById,
  getBlogByAuthorId,
  updateBlog,
  deleteBlog,
};

export default controllers;
