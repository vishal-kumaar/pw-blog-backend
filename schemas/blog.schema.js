import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      maxLength: [70, "Title must be atmost 70 character"],
      trim: true,
    },
    desc: {
      type: String,
      maxLength: [100, "Description must be atmost 100 character"],
      trim: true,
    },
    imgUrl: {
      type: String,
      required: [true, "Image url is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Blog content is required"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);