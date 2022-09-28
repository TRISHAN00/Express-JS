exports.getAllPosts = (req, res) => {
  const { category, page, filter } = req.query;
  res.send("Render all Posts");
};

exports.getSinglePost = (req, res) => {
  res.send("I am POST = " + req.params.postId);
};

exports.createNewPost = (req, res) => {
  res.send("create new post");
};

exports.updatePost = (req, res) => {
  console.log(req.params);
  res.send("Update your existing post = " + req.params.postId);
};

exports.deletePost = (req, res) => {
  console.log(req.params);
  res.send("Delete your existing post = " + req.params.postId);
};
