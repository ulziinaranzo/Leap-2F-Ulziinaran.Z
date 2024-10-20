# 🌲💼 Pinecone Advocate GRAPHQL Challenge 🚀

## 📋 Overview

Welcome to the **Pinecone Advocate Challenge**! 🌟

The objective of this challenge is to learn how to:

- 🛠️ Write **GraphQL queries and mutations**
- 🧪 Test those queries and mutations using **Jest** unit tests

This README will guide you through:

- ⚙️ Setting up the project
- 💻 Writing your GraphQL operations
- 🏃‍♂️ Running commands to test your implementation

Let's get started and have some fun while learning! 😎

## ⚙️ Setup Instructions

To get started, you’ll need to install the necessary dependencies.

1. **Install Dependencies**:

   ```json
   yarn install
   ```

   ```json
   npm install
   ```

2. **Add your MongoDB Connection URL to .env File**:

   ```json
   MONGODB_URL=YOUR_MONGODB_URL
   ```

   1. If connection is successful, it should console log `connection successful` text when you start the project. If not, it will console log `connection Failed`.

## 🚀 Required Mutations and Queries to complete challenges

In this challenge, you'll need to implement the following GraphQL operations:

### 1. **Mutations**:

- **`addTask`**:

  - This mutation creates a new todo task.
  - **Required fields**:

    - `taskName` (String) => required
    - `isDone` (Boolean) => default to `false`
    - `priority` (Int) => required
    - `createdAt` (Date)
    - `updatedAt` (Date)
    - `_id` (MongoDB Object Id)

- **`updateTask`**:
  - This mutation updates an existing task's details using its `taskId`.
  - **Fields to update**:
    - `taskName` (String)
    - `priority` (Int)
    - `isDone` (Boolean)

### 2. **Queries**:

- **`getDoneTasksLists`**:

  - This query retrieves all tasks that have been marked as done.

- **`getAllTasks`**:
  - This query fetches all active tasks.

## ⚙️ Command Instructions

To get started, you’ll need to install the necessary dependencies.

1. **To start project**:

   ```json
   yarn dev
   ```

1. To work on the challenge locally, run dev command and visit https://studio.apollographql.com/sandbox/explorer then add your local host to sandbox link http://localhost:3000/api/graphql

````

2. **To test project**:

```json
yarn test
````

1.  If connection is successful, it should console log `connection successful` text when you start the project. If not, it will console log `connection Failed`.
