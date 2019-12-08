export const CHANGE_ACTIVE_TASK = 'CHANGE_ACTIVE_TASK'

export function changeActiveTask (index) {
  return {
    type: CHANGE_ACTIVE_TASK,
    index
  }
}