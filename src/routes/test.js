const controller = require("../controllers/test");

module.exports = express => {
  var router = express.Router();

  router.get("/test", controller.get);

  router.post("/test", function(req, res) {
    res.send("POST route on things.");
  });
  return router;
};
