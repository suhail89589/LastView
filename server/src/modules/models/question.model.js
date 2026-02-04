import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    codeSnippet: {
      type: String,
    },
    options: {
      type: [
        {
          text: { type: String, required: true },
          isCorrect: {
            type: Boolean,
            required: true,
            default: false,
          },
        },
      ],
    },
    explanation: {
      type: String,
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "medium",
    },
    tags: [String],
  },
  { timestamps: true },
);

questionSchema.index({ tags: 1 });
questionSchema.index({ difficulty: 1 });

const Question = mongoose.model("Question", questionSchema);
export default Question;
