class PostController {
  async getTestPost(req, res) {
    try {
      const posts = { post: "Мой первый post!" };
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
