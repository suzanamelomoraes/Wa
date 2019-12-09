const env = require("./test.environment");
const db = require("../../../server/db/db");

let testDb = null;

beforeEach(() => {
  testDb = env.getTestDb();
  return env.initialise(testDb);
});

afterEach(() => env.cleanup(testDb));

describe("Tasks database tests", () => {
  it("getTasks returns an array of 3 tasks", () => {
    expect.assertions(1);

    const expected = 3;

    return db.getTasks(testDb).then(tasks => {
      const actual = tasks.length;
      expect(actual).toBe(expected);
    });
  });

  it("addTask increases length of tasks list array by 1", () => {
    expect.assertions(1);

    const expected = 4;
    const categoryId = 1;
    const newTask = {
      assignerId: 3,
      title: "Walk with dog",
      description: "Take the dog to walk",
      status: "Completed",
      hours: 1
    };

    return db.addTask(categoryId, newTask, testDb).then(tasks => {
      expect(tasks).toHaveLength(expected);
    });
  });
});

describe("Tasks database tests", () => {
  it("selectTask returns the changed object", () => {
    expect.assertions(2);

    const id = 1;
    const assignee = 2;

    return db.selectTask(id, assignee, testDb).then(task => {
      expect(task.assignee).toEqual(2);
      expect(task.status).toMatch("In progress");
    });
  });
});

describe("Tasks database tests", () => {
  it("completeTask returns the changed object", () => {
    expect.assertions(1);

    const id = 1;
    const assignerId = 1;
    const assigneeId = 2;
    const time = 2;

    return db
      .completeTask(id, assignerId, assigneeId, time, testDb)
      .then(task => {
        expect(task.status).toMatch("Completed");
      });
  });
});
