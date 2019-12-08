import { setError } from './error'
import * as api from '../api/tasks'

export const CHANGE_ACTIVE_TASK = 'CHANGE_ACTIVE_TASK'
export const GET_TASKS_PENDING = 'GET_TASKS_PENDING'
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS'

export function getTasksPending () {
  return {
    type: GET_TASKS_PENDING
  }
}

export function getTasksSuccess (tasks) {
  return {
    type: GET_TASKS_SUCCESS,
    tasks
  }
}

export function getTasks () {
  return dispatch => {
    dispatch(getTasksPending())

    return api.getTasks()
      .then(tasks => dispatch(getTasksSuccess(tasks)))
      .catch(err => dispatch(setError(err.message)))
  }
}