import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS
} from '../../../client/actions/categories'

import {
  SET_ERROR
} from '../../../client/actions/error'

import pending from '../../../client/reducers/pending'

describe('Pending reducer tests', () => {
  it('GET_CATEGORIES_PENDING action changes pending to true', () => {
    const expected = true
    const action = {
      type: GET_CATEGORIES_PENDING
    }
    const actual = pending(false, action)
    expect(actual).toBe(expected)
  })
  it('GET_CATEGORIES_success action changes pending to false', () => {
    const expected = false
    const action = {
      type: GET_CATEGORIES_SUCCESS,
      categories: ['categories']
    }
    const actual = pending(false, action)
    expect(actual).toBe(expected)
  })
  it('SET_ERROR action changes pending to false', () => {
    const expected = false
    const action = {
      type: SET_ERROR,
      message: 'error'
    }
    const actual = pending(false, action)
    expect(actual).toBe(expected)
  })
})
