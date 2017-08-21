var questions = require("../models/newQuestion.model");
var router = require("express").Router();

exports.viewQuestion = function(req, res, next) {
  questions.aggregate([{ $sort: { updatedAt: -1 } }], function(err, payload) {
    if (err) {
      next(err);
    } else {
      res.render("viewQuestion", {
        title: "View Question",
        questions: payload
      });
    }
  });
};

exports.updatequestion = function(req, res, next) {
  questions.aggregate(
    [
      {
        $match: {
          question: req.params.question,
          author: req.params.author,
          answer: req.params.answer
        }
      }
    ],
    function(err, payload) {
      if (err) {
        next(err);
      } else {
        res.render("updateQuestion", {
          question: req.params.question,
          author: req.params.author,
          answer: req.params.answer
        });
      }
    }
  );
};

exports.somequestion = function(req, res, next) {
  newQuestion.updateOne(
    {
      question: req.body.question
    },
    {
      $set: {
        questions: req.body.question,
        answer: req.body.answer,
        updateAt: Date()
      }
    },
    function(err, payload) {
      if (err) {
        return err;
      } else {
        res.redirect("/");
      }
    }
  );
};
