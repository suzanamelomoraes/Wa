export const CHANGE_ACTIVE_TASK = 'CHANGE_ACTIVE_TASK'

export default function activeIndexReducer (state = null, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_TASK:
      return action.index
       
    default:
      return state
  }
}