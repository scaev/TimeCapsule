const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");
const User = require("../../models/User");

router.get("/", index);
router.get("/:id", show);

async function index(req, res) {
  const notes = await Note.find({});
  res.status(200).json(notes);
}

async function show(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    if (post == null) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function create(req, res) {
  try {
    console.log(req.body);
    req.body.user = req.user._id;
    const note = await Note.create(req.body);
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
}

// async function createPost(req, res) {
//   try {
//     const { title, message, name } = req.body;
//     const user = await User.findOne({ name });
//     if (user == null) {
//       return res.status(400).json({ message: "User not found" });
//     }
//     const post = new Post({
//       title,
//       message,
//       name,
//       creator: user._id,
//       comments: [],
//     });
//     await post.save();
//     res.status(201).json(post);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// }

// module.exports = router;

module.exports = {
  index,
  create,
};
