import React from 'react'
import { mount } from 'enzyme'

import { TimeCurrency } from '../../../client/components/TimeCurrency'

test('Testing for true is truthy', () => {
  expect(true).toBeTruthy()
})

describe('Testing TimeuCurrency component', () => {
  it('test for a number', () => {
    const balance = 3
    const hold = 1
    const expected = `${balance} hour(s)Total Wā${hold} hour(s)Wā on hold`
    const component = mount(<TimeCurrency balance={balance} hold={hold}/>)
    const wrapper = component
    expect(wrapper.text()).toMatch(expected)
  })
})
