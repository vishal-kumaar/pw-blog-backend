import express from "express";
import controllers from "../controllers/index.js";

const router = express.Router();

router.post("/user/register", controllers.register);
router.post("/user/login", controllers.login);

export default router;
