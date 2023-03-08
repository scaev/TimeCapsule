const Item = require("../../models/post");

module.exports = {
  index,
  show,
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
