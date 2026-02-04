import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
    required: true,
  },
  startedAt: {
    type: Date,
    default: Date.now,
  },
  completedAt: { type: Date },
  answers: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
      selectedOptionindex: Number,
      isCorrect: Boolean,
    },
  ],
  score: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ["in-progress", "completed"],
    default: "in-progress",
  },
});

const Attempt = mongoose.model(Attempt, attemptSchema);
export default Attempt;
