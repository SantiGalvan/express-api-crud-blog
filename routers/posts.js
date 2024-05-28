const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.js");

const multer = require("multer");
const uploader = multer({ dest: "public/imgs/posts" });

router.get("/", postsController.index);
router.post("/", uploader.single("image"), postsController.store);
router.get("/create", postsController.create);
router.get("/:slug", postsController.show);
router.get("/:slug/download", postsController.download);

module.exports = router;