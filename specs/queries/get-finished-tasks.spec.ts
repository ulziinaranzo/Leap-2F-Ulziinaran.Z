import { TaskModel } from "@/graphql/models/task-schema";
import { getDoneTasks } from "@/graphql/resolvers/queries";

jest.mock("@/graphql/models/task-schema", () => ({
  TaskModel: {
    find: jest.fn(),
  },
}));

describe("getDoneTasks Query", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return all completed tasks", async () => {
    const mockTasks = [
      {
        taskName: "Complete unit tests",
        taskDone: true,
        category: "work",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taskName: "Grocery shopping",
        taskDone: true,
        category: "personal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    (TaskModel.find as jest.Mock).mockResolvedValue(mockTasks);

    const result = await getDoneTasks();

    expect(TaskModel.find).toHaveBeenCalledWith({ taskDone: true });
    expect(TaskModel.find).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockTasks);
  });

  it("should throw an error if fetching completed tasks fails", async () => {
    (TaskModel.find as jest.Mock).mockRejectedValue(
      new Error("Database read error")
    );

    await expect(getDoneTasks()).rejects.toThrow(
      "Could not retrieve completed tasks: Database read error"
    );

    expect(TaskModel.find).toHaveBeenCalledTimes(1);
  });
});
