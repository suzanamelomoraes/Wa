import {
  SET_ERROR
} from '../../../client/actions/error'

import errorReducer from '../../../client/reducers/error'

describe('Error reducer tests', () => {
  it('SET_ERROR action sets the error', () => {
    const currentState = null
    const errorMessage = 'fail'
    const action = {
      type: SET_ERROR,
      message: errorMessage
    }
    const expected = errorMessage

    const actual = errorReducer(currentState, action)

    expect(actual).toBe(expected)
  })
})
