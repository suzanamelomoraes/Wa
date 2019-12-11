import { setError } from './error'
import * as apiTask from '../api/tasks'
import * as apiUser from '../api/users'

export const CHANGE_ACTIVE_TASK = 'CHANGE_ACTIVE_TASK'
export const CHANGE_MAP_CENTER = 'CHANGE_MAP_CENTER'
export const GET_VOLUNTEERING_PENDING = 'GET_VOLUNTEERING_PENDING'
export const GET_VOLUNTEERING_SUCCESS = 'GET_VOLUNTEERING_SUCCESS'
export const GET_TASKS_PENDING = 'GET_TASKS_PENDING'
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS'
export const GET_OFFERINGS_PENDING = 'GET_OFFERINGS_PENDING'
export const GET_OFFERINGS_SUCCESS = 'GET_OFFERINGS_SUCCESS'

export function changeActiveTask (index) {
  return {
    type: CHANGE_ACTIVE_TASK,
    index
  }
}

export function changeMapCenter (center) {
  return {
    type: CHANGE_MAP_CENTER,
    center
  }
}

export function runMapActions (center, index) {
  return dispatch => {
    dispatch(changeActiveTask(null))
    dispatch(changeMapCenter(center))
    // give the map time to recenter due to map loading
    setTimeout(() => {
      dispatch(changeActiveTask(index))
    }, 800)
  }
}

export function getVolunteeringPending () {
  return {
    type: GET_VOLUNTEERING_PENDING
  }
}

export function getVolunteeringSuccess (volunteering) {
  return {
    type: GET_VOLUNTEERING_SUCCESS,
    volunteering
  }
}

export function getVolunteering (id) {
  return dispatch => {
    dispatch(getVolunteeringPending())

    return apiUser.getVolunteering(id)
      .then(volunteering => {
        return dispatch(getVolunteeringSuccess(volunteering))
      })
      .catch(err => dispatch(setError(err.message)))
  }
}

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

    return apiTask.getTasks()
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

export function getOfferings () {
  return dispatch => {
    dispatch(getOfferingsPending())

    return apiUser.getOfferings()
      .then(offerings => dispatch(getOfferingsSuccess(offerings)))
      .catch(err => dispatch(setError(err.message)))
  }
}
