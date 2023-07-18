import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import config from "../config/config.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      maxLength: [50, "Name must be atmost 50 character"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      minLength: [8, "Password must be atleast 8 character"],
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.method = {
  comparePassword: async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  },

  getJwtToken: function () {
    return JWT.sign(
      {
        _id: this._id,
        email: this.email,
      },
      config.jwtSecret,
      {
        expiresIn: config.jwtExpiry,
      }
    );
  },
};

export default mongoose.model("User", userSchema);
