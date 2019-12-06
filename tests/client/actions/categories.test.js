import nock from 'nock'

import {
  getCategoriesPending,
  getCategoriesSuccess,
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  getCategories
} from '../../../client/actions/categories'

const apiUrl = 'http://localhost:3000/api/v1'

describe('get categories action creators', () => {
  it('getCategoriesPending function returns expected action object', () => {
    const expected = {
      type: GET_CATEGORIES_PENDING
    }
    const actual = getCategoriesPending()
    expect(actual).toEqual(expected)
  })
  it('getCategoriesSuccess function returns expected action object', () => {
    const expected = {
      type: GET_CATEGORIES_SUCCESS,
      categories: ['categories']
    }
    const actual = getCategoriesSuccess(['categories'])
    expect(actual).toEqual(expected)
  })
  it('getCategories dispatches GET_CATEGORIES_PENDING & GET_CATEGORIES_SUCCESS', () => {
    const dispatch = jest.fn()
    nock(apiUrl)
      .get('/categories')
      .reply(200, [
        { id: 1, name: 'automotive' },
        { id: 2, name: 'language' }
      ])
    return getCategories()(dispatch)
      .then(() => {
        expect(dispatch.mock.calls.length).toBe(2)
        expect(dispatch.mock.calls[0][0].type).toBe(GET_CATEGORIES_PENDING)
        expect(dispatch).toBeCalledWith({
          categories: [
            { id: 1, name: 'automotive' },
            { id: 2, name: 'language' }
          ],
          type: GET_CATEGORIES_SUCCESS })
      })
  })
})
