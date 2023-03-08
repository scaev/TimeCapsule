const Post = require("../../models/Post");
import User from "../models/User.js";

module.exports = {
  index,
  show,
  createPost,
};

async function index(req, res) {
  //ask to david
  const posts = await Post.find({}).sort("name").populate("category").exec();
  // re-sort based upon the sortOrder of the categories
  posts.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(posts);
}

async function show(req, res) {
  const post = await Post.findById(req.params.id);
  res.json(post);
}

async function createPost(req, res) {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      description,
      picturePath,
      comments: [],
    });
    await newPost.save();
    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
}
