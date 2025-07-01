import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const taskSchema = new Schema({
  taskName: {
    type: String,
    required: true,
  },
  taskDone: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    required: false,
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

export const TaskModel = models.TaskModel || model("TaskModel", taskSchema);
