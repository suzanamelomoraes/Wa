import { SET_ERROR } from '../actions/error'

export default function (error = null, action) {
  switch (action.type) {
    case SET_ERROR:
      return action.message

    default:
      return error
  }
}