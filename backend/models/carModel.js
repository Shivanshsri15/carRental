import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    commentName: { type: String, required: true },
    commentText: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    commentLikes: [],
  },
  {
    timestamps: true,
  }
);

const carSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comment: [commentSchema],
});

const Car = mongoose.model("Car", carSchema);
export default Car;
