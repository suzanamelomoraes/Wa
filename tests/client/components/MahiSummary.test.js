import React from 'react'
import { mount } from 'enzyme'

import MahiSummary from '../../../client/components/MahiSummary'

describe('<MahiSummary /> component tests', () => {
  it('renders props', () => {
    const expectedProps ={
      title: '',
      category: null,
      
    }
    const expected = true
    const component = mount(<MahiSummary />)
    const actual = component.containsMatchingElement(<h1></h1>)
    expect(actual).toBe(expected)
  })
})
