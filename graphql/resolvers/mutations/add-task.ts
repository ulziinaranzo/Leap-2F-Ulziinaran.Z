import { TaskModel } from "@/graphql/models/task-schema";

export const addTask = async (
  _: unknown,
  { taskName, category }: { taskName: string; category: string }
) => {
  try {
    const newTask = await TaskModel.create({
      taskName,
      category,
      taskDone: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return newTask;
  } catch (error) {
    throw new Error("Failed to add task: : <error message>");
  }
};
