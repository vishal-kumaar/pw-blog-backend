import asyncHandler from "../utils/asyncHandler.js";
import JWT from "jsonwebtoken";
import config from "../config/config.js";

const isLoggedOut = asyncHandler(async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return next();
  }

  try {
    JWT.verify(token, config.jwtSecret);
    return res.status(403).json({
      success: false,
      message: "You are already logged in",
    });
  } catch (error) {
    next();
  }
});

export default isLoggedOut;
