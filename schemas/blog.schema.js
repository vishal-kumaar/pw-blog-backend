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
      maxLength: [500, "Description must be atmost 500 character"],
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
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);
