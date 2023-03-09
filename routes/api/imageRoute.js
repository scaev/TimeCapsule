const express = require("express");
const router = express.Router();
const Image = require("../model/Image");

router.post("/store-image", postsCtrl.create);

module.exports = communityRouter;
