import { TaskModel } from "@/graphql/models/task-schema";

export const deleteTask = async (
  _: unknown,
  { taskId, taskName }: { taskId: string; taskName: string }
) => {
  console.log(taskId, taskName);

  try {
    const deleteTask = await TaskModel.find({
      $or: [{ taskName: taskName }, { _id: taskId }],
    });

    if (deleteTask.length === 0) {
      throw new Error("Task not found");
    }

    if (!deleteTask[0].isDone) {
      throw new Error("Task is not complate");
    }
    const findDelete = await TaskModel.findByIdAndDelete(deleteTask[0]._id);

    return findDelete;
  } catch (error: any) {
    throw new Error(`Failed delete Task: ${error.message}`);
  }
};
