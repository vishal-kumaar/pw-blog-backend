import asyncHandler from "../utils/asyncHandler.js";
import CustomError from "../utils/CustomError.js";
import JWT from "jsonwebtoken";
import config from "../config/config.js";

const isLoggedOut = asyncHandler(async (req, _res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    next();
  }

  try {
    JWT.verify(token, config.jwtSecret);
    throw new CustomError("You are already logged in", 403);
  } catch (error) {
    next();
  }
});

export default isLoggedOut;
