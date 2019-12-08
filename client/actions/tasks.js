import { setError } from './error'
import * as api from '../api/tasks'

export const GET_TASKS_PENDING = 'GET_TASKS_PENDING'
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS'
export const GET_OFFERINGS_PENDING = 'GET_OFFERINGS_PENDING'
export const GET_OFFERINGS_SUCCESS = 'GET_OFFERINGS_SUCCESS'

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

export function getOfferingsPending () {
  return {
    type: GET_OFFERINGS_PENDING
  }
}

export function getOfferingsSuccess (offerings) {
  return {
    type: GET_OFFERINGS_SUCCESS,
    offerings
  }
}

export function getOfferings (id) {
  return dispatch => {
    dispatch(getOfferingsPending())

    return api.getOfferings(id)
      .then(offerings => dispatch(getOfferingsSuccess(offerings)))
      .catch(err => dispatch(setError(err.message)))
  }
}
