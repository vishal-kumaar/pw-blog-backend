import asyncHandler from "../../utils/asyncHandler";
import CustomError from "../../utils/CustomError";
import User from "../../schemas/user.schema";

/********************************************************
 * @SIGNUP
 * @route https://localhost:4000/api/auth/signup
 * @description User signup controller for creating a new user
 * @parameters name, email, password
 * @return User Object
 *********************************************************/

const signUp = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email) {
    throw new CustomError("Name and Email are required", 400);
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

  res.status(200).json({
    success: true,
    message: "User created successfully",
    token,
    user,
  });
});

export default signUp;
