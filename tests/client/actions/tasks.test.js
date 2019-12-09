import nock from 'nock'

import {
  getOfferingsPending,
  getOfferingsSuccess,
  GET_OFFERINGS_PENDING,
  GET_OFFERINGS_SUCCESS,
  getOfferings
} from '../../../client/actions/tasks'

const apiUrl = 'http://localhost:3000/api/v1'

describe('get Offerings action creators', () => {
  it('getOfferingsPending function returns expected action object', () => {
    const expected = {
      type: GET_OFFERINGS_PENDING
    }
    const actual = getOfferingsPending()
    expect(actual).toEqual(expected)
  })
  it('getOfferingssSuccess function returns expected action object', () => {
    const expected = {
      type: GET_OFFERINGS_SUCCESS,
      offerings: ['offerings']
    }
    const actual = getOfferingsSuccess(['offerings'])
    expect(actual).toEqual(expected)
  })
  it('getOfferings dispatches GET_OFFERINGS_PENDING & GET_OFFERINGS_SUCCESS', () => {
    const dispatch = jest.fn()
  
    nock(apiUrl)
      .get(`/tasks/assigner`)
      .reply(200, [
        { id: 1, name: 'automotive' }
      ])

    return getOfferings()(dispatch)
      .then(() => {
        expect(dispatch.mock.calls.length).toBe(2)
        expect(dispatch.mock.calls[0][0].type).toBe(GET_OFFERINGS_PENDING)
        expect(dispatch).toBeCalledWith({
          offerings: [
            { id: 1, name: 'automotive' }
          ],
          type: GET_OFFERINGS_SUCCESS })
      })
  })
})
