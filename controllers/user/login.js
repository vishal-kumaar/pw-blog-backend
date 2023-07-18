import asyncHandler from "../../utils/asyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import User from "../../schemas/user.schema.js";
import cookieOptions from "../../utils/cookieOptions.js";

/********************************************************
 * @LOGIN
 * @method POST
 * @route /api/user/login
 * @description User login controller for login a user
 * @parameters email, password
 * @return User Object
 *********************************************************/

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError("Email and password are required", 400);
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new CustomError("Invalid credentials", 401);
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    throw new CustomError("Invalid credentials", 401);
  }

  const token = user.getJwtToken();
  user.password = undefined;
  
  res.cookie("token", token, cookieOptions);
  res.status(200).json({
    success: true,
    message: "Login successful",
    token,
    user,
  });
});

export default login;
