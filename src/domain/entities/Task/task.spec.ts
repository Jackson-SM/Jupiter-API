import { Task } from "./Task";

describe("Task", () => {
  it("should create a new task instance", () => {
    const task = new Task({
      title: "title",
      description: "description",
      projectId: "aaaaaaaaaaaaaa",
    });

    expect(task).toBeTruthy();
    expect(task).toBeDefined();
  });
});