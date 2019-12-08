import { GET_VOLUNTEERING_SUCCESS } from '../actions/tasks'

export default function volunteeringReducer (state = [], action) {
  switch (action.type) {
    case GET_VOLUNTEERING_SUCCESS:
      return action.volunteering

    default:
      return state
  }
}
