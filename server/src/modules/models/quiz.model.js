import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
    timeLimit: { type: Number, default: 20 },
    passingScore: {
      type: Number,
      default: 50,
    },
  },
  { timestamps: true },
);

const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;
