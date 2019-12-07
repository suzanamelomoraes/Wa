import { CHANGE_ACTIVE_TASK } from '../actions/tasks'

export default function tasksReducer (state = {activeIndex: null}, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_TASK:
      console.log(action.index)
      return { 
        activeIndex: action.index
      }

    default:
      return state
  }
}