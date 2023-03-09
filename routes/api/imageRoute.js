const express = require("express");
const router = express.Router();
const Image = require("../model/Image");
const imagesCtrl = require("../../controllers/api/images");

router.post("/store-image", imagesCtrl.createImage);

module.exports = router;
