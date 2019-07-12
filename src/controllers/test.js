module.exports = {
  get: (req, res) => {
    res.send("Hi from test controller");
  },
  post: (req, res) => {
    res.send("Post response form controller");
  }
};
