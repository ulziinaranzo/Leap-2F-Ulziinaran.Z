import { addTask } from "./mutations/add-task";
import { deleteTask } from "./mutations/delete-task";
import { sayHello } from "./mutations/say-hello";
import { updateTask } from "./mutations/update-task";
import { getAllTasks, getDoneTasks, helloQuery } from "./queries";

export const resolvers = {
  Query: {
    helloQuery,
    getAllTasks,
    getDoneTasks,
  },
  Mutation: {
    sayHello,
    addTask,
    updateTask,
    deleteTask,
  },
};
