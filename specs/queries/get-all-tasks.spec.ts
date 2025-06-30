import { getAllTasks } from "@/graphql/resolvers/queries/get-all-tasks";
import { TaskModel } from "@/graphql/models/task-schema";

jest.mock("../../graphql/models", () => ({
  Task: {
    find: jest.fn(),
  },
}));

describe("getAllTasks", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should return all tasks", async () => {
    const mockTasks = [
      {
        taskName: "Task 1",
        isDone: false,
        priority: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taskName: "Task 2",
        isDone: true,
        priority: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    (TaskModel.find as jest.Mock).mockResolvedValue(mockTasks);

    const result = await getAllTasks();

    expect(TaskModel.find).toHaveBeenCalledTimes(1);

    expect(result).toEqual(mockTasks);
  });

  it("should handle errors when fetching tasks", async () => {
    (TaskModel.find as jest.Mock).mockRejectedValue(new Error("Fetch failed"));

    await expect(getAllTasks()).rejects.toThrow("Unable to fetch tasks");

    expect(TaskModel.find).toHaveBeenCalledTimes(1);
  });
});
