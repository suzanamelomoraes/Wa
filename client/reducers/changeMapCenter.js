import { CHANGE_MAP_CENTER } from '../actions/tasks'

export default function changeMapCenterReducer (state = null, action) {
  switch (action.type) {
    case CHANGE_MAP_CENTER:
      return action.center

    default:
      return state
  }
}