import { TaskModel } from "@/graphql/models/task-schema";

export const updateTask = async (
  _: unknown,
  {
    taskId,
    taskName,
    priority,
    isDone,
  }: { taskId: string; taskName?: string; priority?: number; isDone?: boolean }
) => {
  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      taskId,
      {
        taskName,
        priority,
        isDone,
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
  }
};
