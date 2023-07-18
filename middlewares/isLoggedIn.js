import asyncHandler from "../utils/asyncHandler.js";
import CustomError from "../utils/CustomError.js";
import User from "../schemas/user.schema.js";
import JWT from "jsonwebtoken";
import config from "../config/config.js";

const isLoggedIn = asyncHandler(async (req, _res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new CustomError("Not authorized to access this route", 401);
  }

  const decodedJwtPayload = JWT.verify(token, config.jwtSecret);
  const user = await User.findById(decodedJwtPayload._id, "name email");

  if (!user) {
    throw new CustomError("Not authorized to access this route", 401);
  }

  req.user = user;
  next();
});

export default isLoggedIn;
