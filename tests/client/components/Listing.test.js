import React from 'react'
import { mount } from 'enzyme'

import { Listing } from '../../../client/components/Listing'
import MahiSummary from '../../../client/components/MahiSummary'

describe('<Listing /> component tests', () => {
  it('contains <MahiSummary /> (mount)', () => {
    // Arrange
    const expected = true
    // Act
    const wrapper = mount(<Listing />)
    const actual = wrapper.containsMatchingElement(MahiSummary)
    // Assert
    expect(actual).toBe(expected)
  })
})
