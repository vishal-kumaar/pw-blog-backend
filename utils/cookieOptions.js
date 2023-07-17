import config from "../config";

const cokkieExpiry = parseInt(config.jwtExpiry);

const cookieOptions = {
  expires: new Date(Date.now() + cokkieExpiry * 24 * 60 * 60 * 1000),
  httpOnly: true,
};

export default cookieOptions;
