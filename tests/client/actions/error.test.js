import {
  setError,
  SET_ERROR
} from '../../../client/actions/error'

describe('error action tests', () => {
  it('setError function returns expected action object', () => {
    const text = 'fail'
    const expected = {
      type: SET_ERROR,
      message: text
    }

    const actual = setError(text)
    expect(actual).toEqual(expected)
  })
})