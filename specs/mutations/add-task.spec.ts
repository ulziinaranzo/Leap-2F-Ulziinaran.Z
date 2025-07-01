import { TaskModel } from "@/graphql/models/task-schema";
import { addTask } from "@/graphql/resolvers/mutations/add-task";

jest.mock("../../graphql/models/task-schema", () => ({
  TaskModel: {
    create: jest
      .fn()
      .mockResolvedValueOnce({
        taskName: "hi",
        taskDone: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .mockRejectedValueOnce({}),
  },
}));

describe("Add Task Mutation", () => {
  it("Should call addTask mutation with taskName input successfully", async () => {
    const taskName = "Test Task";
    const category = "work";

    const result = await addTask({}, { taskName, category });

    expect(result.taskName).toEqual("hi");
  });

  it("Should call addTask mutation with taskName and priority input with error", async () => {
    const taskName = "Test Task";
    const category = "work";

    try {
      await addTask({}, { taskName, category });
    } catch (error) {
      expect(error).toEqual(new Error("Failed to add task: : <error message>"));
    }
  });
});
