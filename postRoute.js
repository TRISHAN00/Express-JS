const router = require("express").Router();
const {
  getAllPosts,
  getSinglePost,
  createNewPost,
  updatePost,
  deletePost,
} = require("./postsController");

router.get("/", getAllPosts);

router.get("/:postId", getSinglePost);

router.post("/:postId", createNewPost);

router.put("/:postId", updatePost);

router.delete("/postId", deletePost);

module.exports = router;
