import mongoose, { Model, Document } from "mongoose";

const { Schema } = mongoose;

export interface IPost extends Document {
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
}

const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let Post: Model<IPost>;

try {
  Post = mongoose.model<IPost>("Post");
} catch {
  Post =
    (mongoose.models.Post as Model<IPost>) ||
    mongoose.model<IPost>("Post", postSchema);
}

export default Post;
