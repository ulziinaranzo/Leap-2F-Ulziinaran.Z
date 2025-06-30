import { addTask } from "./mutations/add-task";
import { sayHello } from "./mutations/say-hello";
import { getAllTasks } from "./queries/get-all-tasks";
import { helloQuery } from "./queries/hello-query";

export const resolvers = {
  Query: {
    helloQuery,
    getAllTasks,
  },
  Mutation: {
    sayHello,
    addTask,
  },
};
