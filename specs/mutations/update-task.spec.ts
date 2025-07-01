import { TaskModel } from "@/graphql/models/task-schema";
import { updateTask } from "@/graphql/resolvers/mutations/update-task";

jest.mock("@/graphql/models/task-schema", () => ({
  TaskModel: {
    findByIdAndUpdate: jest.fn(),
  },
}));

describe("updateTask Mutation", () => {
  const mockUpdatedTask = {
    _id: "abc123xyz",
    taskName: "Fix bug in API",
    taskDone: false,
    category: "development",
    updatedAt: new Date(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should successfully update a task and return the updated task", async () => {
    (TaskModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(
      mockUpdatedTask
    );

    const input = {
      taskId: "abc123xyz",
      taskName: "Fix bug in API",
      taskDone: false,
      category: "development",
    };

    const result = await updateTask(null, input);

    expect(TaskModel.findByIdAndUpdate).toHaveBeenCalledWith(
      input.taskId,
      {
        taskName: input.taskName,
        taskDone: input.taskDone,
        category: input.category,
        updatedAt: expect.any(Date),
      },
      { new: true }
    );

    expect(result).toEqual(mockUpdatedTask);
  });

  it("should throw an error if no task is found with the given ID", async () => {
    (TaskModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(null);

    await expect(updateTask(null, { taskId: "nonexistentId" })).rejects.toThrow(
      "Task not found"
    );
  });

  it("should throw an error if updating the task fails", async () => {
    (TaskModel.findByIdAndUpdate as jest.Mock).mockRejectedValue(
      new Error("Database update error")
    );

    await expect(updateTask(null, { taskId: "abc123xyz" })).rejects.toThrow(
      "Failed to update task: Database update error"
    );
  });
});
