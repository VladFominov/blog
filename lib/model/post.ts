import mongoose from "mongoose";
const { Schema } = mongoose;

interface IPost {
  title: string;
  text: string;
}

const postModel = new Schema<IPost>({
  title: { type: String }, // String is shorthand for {type: String}
  text: { type: String },
});

export const Post = mongoose.models.Posts ?? mongoose.model("Posts", postModel);
