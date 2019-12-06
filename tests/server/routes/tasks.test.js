const request = require('supertest')

const server = require('../../../server/server')

const mockTasks = [
  { id: 1, category: 'Automotive', categoryId: 1, assignerId: 3, title: 'car wash', description: 'Available for a complete car wash, inside and outside', status: 'open', assignerName: 'Don', hours: 2, image: 'image' }
]

const mockCategories = [
  { id: 1, name: 'Automotive' },
  { id: 2, name: 'Animails and Pets' },
  { id: 3, name: 'Building and construction' },
  { id: 4, name: 'Babysitters and nannies services' },
  { id: 5, name: 'Beauty services' },
  { id: 6, name: 'Cleaning and Domestic services' },
  { id: 7, name: 'Computing' },
  { id: 8, name: 'Financial and Legal services' },
  { id: 9, name: 'Health services' },
  { id: 10, name: 'Teaching and tuition' },
  { id: 11, name: 'Moving and Storage' },
  { id: 12, name: 'Sports' },
  { id: 13, name: 'Photography, video and event services' },
  { id: 14, name: 'Outdoor and garden' },
  { id: 15, name: 'Repairs and Maintenance' },
  { id: 16, name: 'Spiritual' }
]

jest.mock('../../../server/db/db', () => ({
  getTasks: () => Promise.resolve(mockTasks),
  addTask: () => Promise.resolve(mockTasks),
  getCategories: () => Promise.resolve(mockCategories)
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

describe('Gets all categories', () => {
  it('GET /categories', () => {
    return request(server)
      .get('/api/v1/categories')
      .then((res) => {
        expect(res.body).toEqual(mockCategories)
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
