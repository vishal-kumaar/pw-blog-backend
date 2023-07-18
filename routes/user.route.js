import express from "express";
import middlewares from "../middlewares/index.js";
import controllers from "../controllers/index.js";

const router = express.Router();

router.post("/user/register", middlewares.isLoggedOut, controllers.register);
router.post("/user/login", middlewares.isLoggedOut, controllers.login);

export default router;