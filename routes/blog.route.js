import express from "express";
import middleware from "../middlewares/index.js";
import controllers from "../controllers/index.js";
import middlewares from "../middlewares/index.js";

const router = express.Router();

router.post("/blog/add", middleware.isLoggedIn, controllers.addBlog);
router.get("/blog", controllers.getAllBlog);
router.get("/blog/:blogId", controllers.getBlogById);
router.get(
  "/myblog",
  middleware.isLoggedIn,
  controllers.getBlogByAuthorId
);
router.patch(
  "/blog/:blogId",
  [middleware.isLoggedIn, middlewares.isAuthor],
  controllers.updateBlog
);
router.delete(
  "/blog/:blogId",
  [middleware.isLoggedIn, middleware.isAuthor],
  controllers.deleteBlog
);

export default router;
