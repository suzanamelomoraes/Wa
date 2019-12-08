import { GET_USER_SUCCESS } from '../actions/user'

export default function categoriesReducer (state = [], action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return action.user

    default:
      return state
  }
}
