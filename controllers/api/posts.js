const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");
const User = require("../../models/User");

async function index(req, res) {
  const posts = await Post.find({}).sort({ _id: -1 }).populate("user").exec();
  res.status(200).json(posts);
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
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
}

async function deletePost(req, res) {
  try {
    // console.log(req.params.id);
    req.body.user = req.user._id;
    const post = await Post.findByIdAndDelete(req.params.id);
    //query all posts from db
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = {
  index,
  create,
  deletePost,
  show,
};
