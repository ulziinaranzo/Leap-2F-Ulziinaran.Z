import { TaskModel } from "@/graphql/models/task-schema";

export const updateTask = async (
  _: unknown,
  {
    taskId,
    taskName,
    category,
    taskDone,
  }: {
    taskId: string;
    taskName?: string;
    category?: string;
    taskDone?: boolean;
  }
) => {
  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      taskId,
      {
        taskName,
        category,
        taskDone,
        updatedAt: new Date(),
      },
      { new: true }
    );

    if (!updatedTask) {
      throw new Error("Task not found");
    }

    return updatedTask;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to update task: ${error.message}`);
    }
    throw new Error("Failed to update task: Unknown error");
  }
};
