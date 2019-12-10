const request = require('supertest')
const authTesting = require('authenticare/testing/server')

const server = require('../../../server/server')

jest.mock('../../../server/db/db', () => ({
  getTasks: () => Promise.resolve(mockTasks),
  addTask: () => Promise.resolve(mockTasks),
  getTask: () => Promise.resolve(mockTask),
  getTaskByAssigner: () => Promise.resolve(mockTask),
  getTaskByAssignee: () => Promise.resolve(mockTask),
  getUserById: () => Promise.resolve(mockUser)
}))

const mockTask = {
  id: 1,
  category: 'Automotive',
  categoryId: 1,
  assignerId: 3,
  assigneeId: 2,
  title: 'car wash',
  description: 'Available for a complete car wash, inside and outside',
  status: 'Open',
  assignerName: 'Don',
  hours: 2,
  image: 'image'
}
const mockTasks = [ mockTask ]
const mockUser = { id: 3, balance: 5 }

describe('Tasks route tests', () => {
  const token = authTesting.createTestToken({ id: 55, username: 'test-user' })

  it('GET /tasks', () => {
    return request(server)
      .get('/api/v1/tasks')
      .then(res => {
        expect(res.body).toEqual(mockTasks)
      })
  })

  it('POST /tasks/newtask', () => {
    const newTask = {
      id: mockTask.id,
      category: mockTask.category,
      categoryId: mockTask.categoryId,
      title: mockTask.title,
      description: mockTask.description,
      status: mockTask.status,
      assignerName: mockTask.assignerName,
      hours: mockTask.hours,
      image: mockTask.image
    }

    return request(server)
      .post('/api/v1/tasks/newtask')
      .set({ authorization: `Bearer ${token}` })
      .send(newTask)
      .then(res => {
        expect(res.body).toEqual(mockTasks)
      })
  })

  it('GET /assigner', () => {
    return request(server)
      .get('/api/v1/tasks/assigner')
      .set({ authorization: `Bearer ${token}` })
      .then(res => {
        expect(res.body).toEqual(mockTask)
      })
  })

  it('GET /assignee', () => {
    return request(server)
      .get('/api/v1/tasks/assigner')
      .set({ authorization: `Bearer ${token}` })
      .then(res => {
        expect(res.body).toEqual(mockTask)
      })
  })
})
