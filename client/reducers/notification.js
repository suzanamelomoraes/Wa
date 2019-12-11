import { SET_NOTIFICATION } from '../actions/notification'

export default function notification (state = null, action) {
  switch (action.type) {
    case SET_NOTIFICATION:
      return action.message

    default:
      return state
  }
}
