import isLoggedIn from "./isLoggedIn.js";
import isLoggedOut from "./isLoggedOut.js";
import isAuthor from "./isAuthor.js";

const middlewares = {
  isLoggedIn,
  isLoggedOut,
  isAuthor,
};

export default middlewares;