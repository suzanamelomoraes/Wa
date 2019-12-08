import { setError } from './error'
import * as api from '../api/categories'

export const GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'

export function getCategoriesPending () {
  return {
    type: GET_CATEGORIES_PENDING
  }
}

export function getCategoriesSuccess (categories) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    categories
  }
}

export function getCategories () {
  return dispatch => {
    dispatch(getCategoriesPending())

    return api.getCategories()
      .then(categories => dispatch(getCategoriesSuccess(categories)))
      .catch(err => dispatch(setError(err.message)))
  }
}
