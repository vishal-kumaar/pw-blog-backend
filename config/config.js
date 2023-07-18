import dotenv from "dotenv";
dotenv.config();

const config = {
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiry: process.env.JWT_EXPIRY,
  allowedOrigins: process.env.ALLOWED_ORIGINS.split(","),
};

export default config;
