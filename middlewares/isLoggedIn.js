import asyncHandler from "../utils/asyncHandler.js";
import CustomError from "../utils/CustomError.js";
import User from "../schemas/user.schema.js";

const isLoggedIn = asyncHandler(async (req, _res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new CustomError("Not authorized to access this route", 401);
  }

  const decodedJwtPayload = Jwt.verify(token, config.JWT_SECRET);
  req.user = await User.findById(decodedJwtPayload._id, "name email");
  next();
});

export default isLoggedIn;
