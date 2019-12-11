import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const apiURL = 'http://localhost:3000/api/v1/tasks'

export function getTasks () {
  return request
    .get(apiURL)
    .set({ Accept: 'application/json' })
    .then(res => res.body)
    .catch(err => {
      throw new Error(err.message)
    })
}

export function completeTask (id, assigneeId, time) {
  return request
    .put(apiURL + `/completed`)
    .set({ Accept: 'application/json' })
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .send({ id, assigneeId, time })
    .then(res => res.body)
    .catch(err => {
      throw new Error(err.message)
    })
}

export function addMahi (mahi) {
  return request
    .post(apiURL + '/newtask')
    .set({ Accept: 'application/json' })
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .send(mahi)
    .then(res => res.body)
    .catch(err => {
      throw new Error(err.message)
    })
}

export function selectTask (id) {
  return request
    .put(apiURL)
    .set({ Accept: 'application/json' })
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .send({ id })
    .then(res => res.body)
    .catch(err => {
      throw new Error(err.message)
    })
}

export function deselectTask (id) {
  return request
    .put(`${apiURL}/assignee`)
    .set({ Accept: 'application/json' })
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .send({ id })
    .then(res => res.body)
    .catch(err => {
      throw new Error(err.message)
    })
}

export function deleteMahi (mahi) {
  return request
    .delete(apiURL)
    .set({ Accept: 'application/json' })
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .send(mahi)
    .then(res => res.body)
    .catch(err => {
      throw new Error(err.message)
    })
}
