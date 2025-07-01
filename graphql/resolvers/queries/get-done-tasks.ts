import { TaskModel } from "@/graphql/models/task-schema";

export const getDoneTasks = async () => {
  try {
    const tasks = await TaskModel.find({ taskDone: true });
    return tasks;
  } catch (error) {
    throw new Error(`Failed to fetch tasks:`);
  }
};
