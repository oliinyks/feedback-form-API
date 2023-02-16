const { Schema, model } = require("mongoose");
const Joi = require("joi");

const feedbackSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    message: {
		 type: String,
		 required: [true, "Message is required"],
    }
  },
  { versionKey: false, timestamps: true }
);

const Feedback = model("feedback", feedbackSchema);

const addfeedbackSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  message: Joi.string().required(),
});


module.exports = {
  Feedback,
  addfeedbackSchema,
};
