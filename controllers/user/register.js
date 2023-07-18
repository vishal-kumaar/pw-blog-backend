import asyncHandler from "../../utils/asyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import User from "../../schemas/user.schema.js";

/********************************************************
 * @REGISTER
 * @method POST
 * @route /api/user/register
 * @description User register controller for creating a new user
 * @parameters name, email, password
 * @return User Object
 *********************************************************/

const register = asyncHandler(async (req, res) => {
  if (req.user){
    throw new CustomError("Already logged in", 303);
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new CustomError("All fields are required", 400);
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new CustomError("User already exists", 409);
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = user.getJwtToken();
  await user.save();
  user.password = undefined;

  req.headers['Authorization'] = `Bearer ${token}`;
  res.status(200).json({
    success: true,
    message: "User created successfully",
    token,
    user,
  });
});

export default register;
