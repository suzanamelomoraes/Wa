const request = require('supertest')

const server = require('../../../server/server')

const mockTasks = [
  { id: 1, category: 'Automotive', categoryId: 1, assignerId: 3, title: 'car wash', description: 'Available for a complete car wash, inside and outside', status: 'open', assignerName: 'Don', hours: 2, image: 'image' }
]

const mockTask =
  { id: 1, category: 'Automotive', categoryId: 1, assignerId: 3, title: 'car wash', description: 'Available for a complete car wash, inside and outside', status: 'open', assignerName: 'Don', hours: 2, image: 'image' }

jest.mock('../../../server/db/db', () => ({
  getTasks: () => Promise.resolve(mockTasks),
  addTask: () => Promise.resolve(mockTasks)

}))

describe('Gets all tasks available', () => {
  it('GET /tasks', () => {
    return request(server)
      .get('/api/v1/tasks')
      .then((res) => {
        expect(res.body).toEqual(mockTasks)
      })
  })
})

describe('Add new task', () => {
  it('POST /tasks/newTask/:id', () => {
    const newTask = {
      id: mockTasks.id,
      category: mockTasks.category,
      categoryId: mockTasks.categoryId,
      assignerId: mockTasks.assignerId,
      title: mockTasks.title,
      description: mockTasks.description,
      status: mockTasks.status,
      assignerName: mockTasks.assignerName,
      hours: mockTasks.hours,
      image: mockTasks.image
    }

    return request(server)
      .post('/api/v1/tasks/newTask/1')
      .send(newTask)
      .then((res) => {
        expect(res.body).toEqual(mockTasks)
      })
  })
})
