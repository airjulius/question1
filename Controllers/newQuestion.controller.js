var newQuestion = require("../models/newQuestion.model");
var router = require("express").Router();

exports.getlayout = function(req, res, next) {
  res.render("newQuestion", {
    title: "Question This"
  });
};

exports.addQuestion = function(req, res, next) {
  var currentDate = new Date();
  var QuestionToAdd = new newQuestion({
    author: req.body.author,
    answer: req.body.answer,
    question: req.body.question,
    createdAt: currentDate,
    updatedAt: Date()
  });
  QuestionToAdd.save(function(err, payload) {
    if (err) {
      next(err);
    } else {
      return res.send("good job human");
    }
  });
};
