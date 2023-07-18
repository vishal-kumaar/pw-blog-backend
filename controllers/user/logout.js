import asyncHandler from "../../utils/asyncHandler.js";

/********************************************************
 * @LOGOUT
 * @method GET
 * @route /api/user/logout
 * @description User logout by clearing user cookies
 * @parameters none
 * @return Success message
 *********************************************************/

const logout = asyncHandler(async (_req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logout successful",
  });
});

export default logout;
