import {
  GET_CATEGORIES_SUCCESS
} from '../../../client/actions/categories'

import categoriesReducer from '../../../client/reducers/categories'

describe('Categories reducer tests', () => {
  it('GET_CATEGORIES_SUCCESS action sets categories', () => {
    const currentState = null
    const categories = [
      { id: 1, name: 'automotive' },
      { id: 2, name: 'language' }
    ]
    const action = {
      type: GET_CATEGORIES_SUCCESS,
      categories
    }
    const expected = categories
    const actual = categoriesReducer(currentState, action)
    expect(actual).toBe(expected)
  })
})
