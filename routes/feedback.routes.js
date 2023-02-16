const Router = require('express');
const router = new Router;
const feedbackController = require("../controller/feedback.controller");
const { ctrlWrapper, validateSchema } = require("../middlewares");
const {addfeedbackSchema} = require('../models/feedback');

router.post(
  "/feedback",
  validateSchema(addfeedbackSchema),
  ctrlWrapper(feedbackController.createFeedback)
);
router.get("/feedback", ctrlWrapper(feedbackController.getAllFeedbacks));

module.exports = router;