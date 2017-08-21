var express = require("express");
var questionRouter = express.Router();
var newQuestion = require("../models/newQuestion.model");
var newQuestioncontroller = require("../controllers/newQuestion.controller");

questionRouter.route("/").get(newQuestioncontroller.getlayout);
questionRouter.route("/").post(newQuestioncontroller.addQuestion);

module.exports = questionRouter;
