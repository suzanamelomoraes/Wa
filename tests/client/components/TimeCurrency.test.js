import React from 'react'
import { mount } from 'enzyme'

import { TimeCurrency } from '../../../client/components/TimeCurrency'

test('Testing for true is truthy', () => {
  expect(true).toBeTruthy()
})

describe('Testing TimeuCurrency component', () => {
  it('test for a number', () => {
    const expected = '3'
    const props = { balance: 3 }
    const component = mount(<TimeCurrency props={props}/>)
    const wrapper = component
    expect(wrapper.text()).toMatch(expected)
  })
})
