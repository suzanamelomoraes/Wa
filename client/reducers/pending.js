import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS
} from '../actions/categories'

import {
  GET_TASKS_PENDING,
  GET_TASKS_SUCCESS
} from '../actions/tasks'

import {
  SET_ERROR
} from '../actions/error'

export default function (pending = false, action) {
  switch (action.type) {
    case GET_CATEGORIES_PENDING:
    case GET_TASKS_PENDING:
      return true

    case GET_CATEGORIES_SUCCESS:
    case GET_TASKS_SUCCESS:
    case SET_ERROR:
      return false

    default:
      return pending
  }
}
