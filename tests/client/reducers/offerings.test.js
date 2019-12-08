import {
  GET_OFFERINGS_SUCCESS
} from '../../../client/actions/tasks'

import offeringsReducer from '../../../client/reducers/offerings'

describe('Categories reducer tests', () => {
  it('GET_CATEGORIES_SUCCESS action sets categories', () => {
    const currentState = null
    const offerings = [
      { id: 1, name: 'automotive' },
      { id: 2, name: 'language' }
    ]
    const action = {
      type: GET_OFFERINGS_SUCCESS,
      offerings
    }
    const expected = offerings
    const actual = offeringsReducer(currentState, action)
    expect(actual).toBe(expected)
  })
})
