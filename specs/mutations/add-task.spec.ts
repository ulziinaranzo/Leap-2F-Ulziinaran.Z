import { addTask } from "@/graphql/resolvers/mutations/add-task";

jest.mock("../../graphql/schemas", () => ({
  Task: {
    create: jest
      .fn()
      .mockResolvedValueOnce({
        taskName: "hi",
        isDone: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .mockRejectedValueOnce({}),
  },
}));

describe("Add Task Mutation", () => {
  it("Should call addTask mutation with taskName input successfully", async () => {
    const taskName = "Test Task";
    const priority = 1;

    const result = await addTask({}, { taskName, priority });

    expect(result.taskName).toEqual("hi");
  });

  it("Should call addTask mutation with taskName and priority input with error", async () => {
    const taskName = "Test Task";
    const priority = 1;

    try {
      await addTask({}, { taskName, priority });
    } catch (error) {
      expect(error).toEqual(new Error("Failed to add task: : <error message>"));
    }
  });
});
