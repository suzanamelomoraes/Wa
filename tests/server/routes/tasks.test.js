const request = require("supertest");

const server = require("../../../server/server");

const mockTasks = [
  {
    id: 1,
    category: "Automotive",
    categoryId: 1,
    assignerId: 3,
    title: "car wash",
    description: "Available for a complete car wash, inside and outside",
    status: "open",
    assignerName: "Don",
    hours: 2,
    image: "image"
  }
];

const mockTask = {
  id: 1,
  category: "Automotive",
  categoryId: 1,
  assignerId: 3,
  assigneeId: 2,
  title: "car wash",
  description: "Available for a complete car wash, inside and outside",
  status: "open",
  assignerName: "Don",
  hours: 2,
  image: "image"
};

jest.mock("../../../server/db/db", () => ({
  getTasks: () => Promise.resolve(mockTasks),
  addTask: () => Promise.resolve(mockTask),
  getTask: () => Promise.resolve(mockTask),
  getTaskByAssigner: () => Promise.resolve(mockTask),
  getTaskByAssignee: () => Promise.resolve(mockTask)
}));

describe("Gets all tasks available", () => {
  it("GET /tasks", () => {
    return request(server)
      .get("/api/v1/tasks")
      .then(res => {
        expect(res.body).toEqual(mockTasks);
      });
  });
});

describe("Add new task", () => {
  it("POST /tasks/newtask", () => {
    const newTask = {
      id: mockTask.id,
      category: mockTask.category,
      categoryId: mockTask.categoryId,
      assignerId: mockTask.assignerId,
      title: mockTask.title,
      description: mockTask.description,
      status: mockTask.status,
      assignerName: mockTask.assignerName,
      hours: mockTask.hours,
      image: mockTask.image
    };

    return request(server)
      .post("/api/v1/tasks/newtask")
      .send(newTask)
      .then(res => {
        expect(res.body).toEqual(mockTask);
      });
  });
});

describe("Gets a task by Id", () => {
  it("GET /:id", () => {
    return request(server)
      .get("/api/v1/tasks/1")
      .then(res => {
        expect(res.body).toEqual(mockTask);
      });
  });
});

describe("Gets a task by assigner Id", () => {
  it("GET /assigner/:id", () => {
    return request(server)
      .get("/api/v1/tasks/assigner/3")
      .then(res => {
        expect(res.body).toEqual(mockTask);
      });
  });
});

describe("Gets a task by assignee Id", () => {
  it("GET /assignee/:id", () => {
    return request(server)
      .get("/api/v1/tasks/assigner/2")
      .then(res => {
        expect(res.body).toEqual(mockTask);
      });
  });
});
