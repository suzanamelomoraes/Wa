import { GET_OFFERINGS_SUCCESS } from '../actions/tasks'

export default function offeringsReducer (state = [], action) {
  switch (action.type) {
    case GET_OFFERINGS_SUCCESS:
      return action.offerings

    default:
      return state
  }
}
