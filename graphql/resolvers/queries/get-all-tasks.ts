import { TaskModel } from "@/graphql/models/task-schema";

export const getAllTasks = async () => {
  try {
    const tasks = await TaskModel.find({});
    return tasks;
  } catch (error) {
    throw new Error("Unable to fetch tasks");
  }
};
