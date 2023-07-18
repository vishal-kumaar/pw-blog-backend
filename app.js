import express from "express";
import userRoutes from "./routes/user.route.js";
import blogRoutes from "./routes/blog.route.js";
import cors from "cors";
import morgan from "morgan";
import corsConfig from "./config/corsConfig.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));
app.use(morgan("tiny"));
app.use("/api", userRoutes);
app.use("/api", blogRoutes);

export default app;
