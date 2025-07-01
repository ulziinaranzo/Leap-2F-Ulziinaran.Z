import { TaskModel } from "@/graphql/models/task-schema";
import { updateTask } from "@/graphql/resolvers/mutations/update-task";

jest.mock("@/graphql/models/task-schema", () => ({
  TaskModel: {
    findByIdAndUpdate: jest.fn(),
  },
}));

describe("updateTask Mutation", () => {
  const mockUpdatedTask = {
    taskName: "Fix bug in API",
    taskDone: true,
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

    const result = await updateTask(null, {
      taskId: "345",
      taskName: "Fix bug in API",
      taskDone: true,
      category: "development",
    });

    expect(TaskModel.findByIdAndUpdate).toHaveBeenCalledWith(
      "345",
      {
        taskName: "Fix bug in API",
        taskDone: true,
        category: "development",
        updatedAt: expect.any(Date),
      },
      { new: true }
    );

    expect(result).toEqual(mockUpdatedTask);
  });

  it("should successfully update a task with partial data", async () => {
    const partialMockTask = {
      taskName: "Updated task",
      updatedAt: new Date(),
    };

    (TaskModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(
      partialMockTask
    );

    const result = await updateTask(null, {
      taskId: "345",
      taskName: "Updated task",
    });

    expect(TaskModel.findByIdAndUpdate).toHaveBeenCalledWith(
      "345",
      {
        taskName: "Updated task",
        category: undefined,
        taskDone: undefined,
        updatedAt: expect.any(Date),
      },
      { new: true }
    );

    expect(result).toEqual(partialMockTask);
  });

  it("should throw an error if no task is found with the given ID", async () => {
    (TaskModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(null);

    await expect(updateTask(null, { taskId: "345" })).rejects.toThrow(
      "Task not found"
    );
  });

  it("should throw an error if updating the task fails with Error instance", async () => {
    (TaskModel.findByIdAndUpdate as jest.Mock).mockRejectedValue(
      new Error("Database update error")
    );

    await expect(updateTask(null, { taskId: "345" })).rejects.toThrow(
      "Failed to update task: Database update error"
    );
  });

  it("should throw an error if updating the task fails with non-Error instance", async () => {
    (TaskModel.findByIdAndUpdate as jest.Mock).mockRejectedValue(
      "Some non-Error rejection"
    );

    await expect(updateTask(null, { taskId: "345" })).rejects.toThrow(
      "Failed to update task: Unknown error"
    );
  });

  it("should throw an error if updating the task fails with null rejection", async () => {
    (TaskModel.findByIdAndUpdate as jest.Mock).mockRejectedValue(null);

    await expect(updateTask(null, { taskId: "345" })).rejects.toThrow(
      "Failed to update task: Unknown error"
    );
  });
});
