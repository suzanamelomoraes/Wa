import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS
} from '../actions/categories'

import {
  GET_VOLUNTEERING_SUCCESS,
  GET_VOLUNTEERING_PENDING,
  GET_TASKS_PENDING,
  GET_TASKS_SUCCESS,
  GET_OFFERINGS_SUCCESS,
  GET_OFFERINGS_PENDING
} from '../actions/tasks'

import {
  SET_ERROR
} from '../actions/error'

import {
  GET_USER_PENDING,
  GET_USER_SUCCESS
} from '../actions/user'

export default function (pending = false, action) {
  switch (action.type) {
    case GET_CATEGORIES_PENDING:
    case GET_VOLUNTEERING_PENDING:
    case GET_OFFERINGS_PENDING:
    case GET_USER_PENDING:
    case GET_TASKS_PENDING:
      return true

    case GET_CATEGORIES_SUCCESS:
    case GET_TASKS_SUCCESS:
    case GET_OFFERINGS_SUCCESS:
    case GET_USER_SUCCESS:
    case GET_VOLUNTEERING_SUCCESS:
    case SET_ERROR:
    case GET_VOLUNTEERING_SUCCESS:
      return false

    default:
      return pending
  }
}
