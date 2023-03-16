const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);

// const Post = mongoose.model("Post", postSchema);

// export default Post;
