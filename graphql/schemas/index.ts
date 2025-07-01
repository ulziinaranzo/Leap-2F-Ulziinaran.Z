import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    helloQuery: String
    getAllTasks: [Task]
    getDoneTasks: [Task]
  }
  type Mutation {
    sayHello(name: String!): String
    addTask(taskName: String!, category: String): Task
    updateTask(
      taskId: ID!
      taskName: String
      category: String
      taskDone: Boolean
    ): Task
    deleteTask(taskId: ID, taskName: String): Task
  }
  type Task {
    _id: ID!
    taskName: String!
    taskDone: Boolean
    category: String
    createdAt: String
    updatedAt: String
  }
`;
