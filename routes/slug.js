var express = require("express");
const SlugController = require("../controllers/SlugController");

var router = express.Router();

router.get("/", SlugController.GetSlugUrl);


module.exports = router;
