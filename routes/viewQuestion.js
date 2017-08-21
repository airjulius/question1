var express = require("express");
var router = express.Router();

var viewQuestionController = require("../controllers/viewQuestion.controller");

router.route("/").get(viewQuestionController.viewQuestion);

router.route("/:question").get(viewQuestionController.updatequestion);

router.route("/:question").post(viewQuestionController.updatequestion);

module.exports = router;
