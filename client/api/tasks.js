import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const apiURL = 'http://localhost:3000/api/v1/tasks'

export function getTasks () {
  return request.get(apiURL)
    .set({ 'Accept': 'application/json' })
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function completeTask (id, assignerId, assigneeId, time) {
  return request.put(apiURL + `/completed`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .send({ id, assignerId, assigneeId, time })
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function addMahi (mahi) {
  return request.post(apiURL + '/newtask')
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .send(mahi)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function selectTask (id, assignee) {
  return request
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .put(apiURL)
    .send({ id, assignee })
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}
