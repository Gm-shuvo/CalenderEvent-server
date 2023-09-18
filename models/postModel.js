import mongoose, { Schema, model } from "mongoose";

const postSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date:{
      type: String,
      require: true
    }
  },
  {
    timestamps: true, // Set timestamps to true
  }
);

const Post = model("Post", postSchema);
export default Post;
