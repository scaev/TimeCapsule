const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/api/posts");
const isUser = require("../../config/ensureLoggedIn");

router.get("/", postsCtrl.index);
router.post("/new", isUser, postsCtrl.create);
router.delete("/:id", isUser, postsCtrl.deletePost);
module.exports = router;
