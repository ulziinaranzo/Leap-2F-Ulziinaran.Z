import mongoose from "mongoose";
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  taskName: {
    type: String,
    required: true,
  },
  taskDone: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const TaskModel = mongoose.models.Task || model("TaskModel", taskSchema);
